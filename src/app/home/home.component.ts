import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  residents:any;
constructor(public _shared: SharedService) {

}

ngOnInit(): void {
  this._shared.getallresidents().subscribe(
    res => {
      console.log(res);
      this.residents = res;
    },
    err => { console.log(err); }
  )

};
delete(id:any){
  if(confirm('Are you sure you want to delete this resident??')){
  this._shared.deleteresident(id).subscribe(
    res => {
      console.log(res);
      this.ngOnInit();
    },
    err => { console.log(err); }
  )
}}


}
