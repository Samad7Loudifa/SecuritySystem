import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {

  guests :any;
  constructor(public _shared: SharedService) {
  }
  ngOnInit(): void {
    
    this._shared.getallguests().subscribe(
      res=>{
        console.log(res);
        this.guests = res
      },
      err=>{console.log(err);}
    )
  }
}
