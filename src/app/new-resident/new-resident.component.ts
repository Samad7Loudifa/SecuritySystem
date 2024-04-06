import { Component, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { subscribeOn } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-resident',
  templateUrl: './new-resident.component.html',
  styleUrl: './new-resident.component.css'
})
export class NewResidentComponent {
  resident = {
    name: '',
    flat: 0,
  }
add(){
  this._shared.createnewresident(this.resident)
  .subscribe(
    res =>{
    this.resident = {
      name: '',
      flat: 0,
    }
  },
  err=>{
    console.error(err);
  }
  
  )
  
}
@ViewChild('residentform')
residentform!: NgForm;
onsubmit(residentform: NgForm)
{
  console.log(residentform);
}
constructor(public _shared: SharedService) {

}
}
