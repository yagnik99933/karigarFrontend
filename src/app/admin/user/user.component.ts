import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from 'src/app/admin-services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {

  show: boolean = false;

  user = { mobileNo: '', city: ''};
  users : []=[];
  userDetails: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private router: Router,private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  async searchUser(mobileNo){

    console.log(mobileNo);
    // this.router.navigate(['./mobileNo'], {relativeTo: this.activatedRoute});
    this.userService.searchUser(+this.user.mobileNo)
    .subscribe((userDetails)=>{
      this.userDetails = userDetails;
      console.log(userDetails);
    })

    if(this.userDetails){
      this.show = true;
    }

  }

  async deleteUser(mobileNo){

  //   console.log(mobileNo);
  //   // this.router.navigate(['./mobileNo'], {relativeTo: this.activatedRoute});
  //   this.userService.deleteUser(+this.user.mobileNo)
  //   .subscribe((userDetails)=>{
  //     this.userDetails = userDetails;
  //     console.log(userDetails);
  //   })

  //   if(this.userDetails){
  //     this.show = true;
  //   }
  }

}
