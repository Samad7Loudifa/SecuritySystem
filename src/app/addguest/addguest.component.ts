import { Component, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addguest',
  templateUrl: './addguest.component.html',
  styleUrls: ['./addguest.component.css']
})


export class AddguestComponent {
 
  constructor(public _shared: SharedService , private router: Router) {}
  guest = {
    name: '',
    Image: '',
    ID: '',
    datetime: new Date().toISOString(), // Initialize datetime with current date and time
    resident: '',
    banned: false
  };
  isBanned: boolean = false;
  success: boolean = false;
  img:any;
  residents: any;
  takeimg(e:any){
    this.img= e.target.files[0];
    console.log(this.img);
  }
  
  ngOnInit(): void {
    this.getResidents();
  }
  bannedornah(): void {
    this._shared.isbrobanned(this.guest.ID).subscribe(
      (res) => {
        console.log(res);
        this.isBanned = res.banned;
      },
      (err) => {
        console.log(err);
      }
      
    );
    this.isBanned = false;
  }
  redirectToGuestsAfterDelay(): void {
    const delayInSeconds = 5; // Adjust the delay as needed (in seconds)
    setTimeout(() => {
      this.router.navigate(['/history']); // Redirect to visity history component after the delay
    }, delayInSeconds * 500); // Convert seconds to milliseconds
  }
  add(): void {

  let formdata = new FormData();
  formdata.append('name',this.guest.name);
  formdata.append('Image',this.img);
  formdata.append('ID',this.guest.ID);
  formdata.append('datetime',this.guest.datetime);
  formdata.append('resident',this.guest.resident);

   this._shared.createnewguest(formdata).subscribe(
      res => {
        console.log(res);    
        this.success=true; 
      },
      err => {
        console.log(err);
      }
    );
    this.success=false;
  }
  getResidents(): void {
    this._shared.getallresidents().subscribe(
      res => {
        console.log(res);
        this.residents = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  
  @ViewChild('guestform')
  guestform!: NgForm;
  onsubmit(guestform: NgForm)
  {
    this.redirectToGuestsAfterDelay();
    console.log(guestform);
  }
}
