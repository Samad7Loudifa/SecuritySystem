import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-resident',
  templateUrl: './edit-resident.component.html',
  styleUrls: ['./edit-resident.component.css']
})
export class EditResidentComponent {
  @ViewChild('Eresidentform')
  Eresidentform!: NgForm;
  resident:any={};
  id:any;
  updateandvalidate(id:any,form:any) {
    this._shared.updateresident(this.id,this.resident)
      .subscribe(
        res =>{console.log(res);
          this.router.navigate(['/home']);},
        
        err => {console.log(err);}
    )
    
  };
  constructor(private act: ActivatedRoute, private _shared: SharedService, private router: Router) {
    
  };
  ngOnInit(): void {
    
    this.id=this.act.snapshot.paramMap.get('id');
    this._shared.getresidentbyid(this.id)
    .subscribe(
      res=>{
        this.resident=res;
        console.log(this.id);
      },
      err=>{
        console.log(err)
      }
    )
    

  };

}
