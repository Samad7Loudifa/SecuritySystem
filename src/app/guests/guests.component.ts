import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent {

  guests: any[] = [];
  constructor(private _shared: SharedService) {}

 updateBannedStatus(id: any) {
    const guest = this.guests.find((guest: any) => guest._id === id);
    if (confirm(`Are you sure you want to ${guest.banned ? 'unban' : 'ban'} this guest?`)) {
      this._shared.updateGuestBannedStatus(id, !guest.banned).subscribe(
        updatedGuest => {
          console.log(updatedGuest);
          guest.banned = !guest.banned; // Update the local state
        },
        err => {
          console.error(err);
        }
      );
    }
  }
  
  removeDuplicates(array: any[], key: string): any[] {
    return array.filter((currentGuest, index, oldarray) =>
      index === oldarray.findIndex((guest) => guest[key] === currentGuest[key])
    );
  }
  
  ngOnInit(): void {
    this._shared.getallguests().subscribe(
      res => {
        console.log(res);
        this.guests = this.removeDuplicates(res, 'ID');
      },
      err => {
        console.log(err);
      }
    );
  }
  delete(id: any) {
    if (confirm("Are you sure you want to delete this guest? once you do the visit history of this guest will be deleted as well.")) {
      this._shared.deleteguest(id).subscribe(
        res => {
          console.log(res);
          this.ngOnInit(); // Refresh guest list
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
