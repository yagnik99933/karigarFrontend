import { Component, OnInit } from '@angular/core';
import { UserstatusService } from 'src/app/services/userstatus.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  proDetails: any;
  constructor(public userStatusService: UserstatusService) { }

  ngOnInit(){

    this.userStatusService.showProfile()
    .subscribe((proDetails)=>{
      console.log(proDetails);
      this.proDetails = proDetails;
    })
  }

}
