import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderstatusService } from 'src/app/services/providerstatus.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  i=0;
  orderList : any[];
  orderCount: number;
  proName: string;
  person: any;
  personId: any;
  flag = true;

  constructor(private router: Router, private route: ActivatedRoute ,
   private providerStatusService: ProviderstatusService) { }

  ngOnInit(){
    this.providerStatusService.showOrder()
    .subscribe((orderList)=>{
      this.orderList = <any>orderList;
      this.orderCount = orderList.length;
      console.log(this.orderList);

    });
    this.person = JSON.parse(localStorage.getItem("Person"));
  }

  urlChanging(){

    this.person = JSON.parse(localStorage.getItem("Person"));
    this.personId = this.person._id;

    this.flag = !this.flag;
    if(this.flag == true){
      this.router.navigate(['provider/',this.personId,'status']);
    }
  }

  cancel(){
    this.providerStatusService.cancelOrder()
    .subscribe((res)=>{
      console.log(res);
      this.router.navigate(['provider/',this.personId]);
    })
  }

}
