import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { User } from '../shared/user';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  id: any;
  accessToken: any;
  hide = true;
  hideRequiredControl = new FormControl(true);
  user = { mobileNo: '', password: '', providerlogin: false };
  error: boolean = false;

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
  private activatedRoute: ActivatedRoute, private router: Router,
  private authservice: AuthService ,private cookie: CookieService) {
}

  ngOnInit() {
  }

  onSubmit(providerlogin: boolean) {

    console.log('User: ', this.user);
    this.authservice.login(
      +this.user.mobileNo,
      this.user.password,
      this.user.providerlogin)
      .subscribe((person)=>{
        console.log(person);


          this.id = person._id;
          // Saving person's registration details in Local Storage.
          localStorage.setItem("Person", JSON.stringify(person));
          // var x = JSON.parse(localStorage.getItem("Person"));

          // if(x){
            if (providerlogin)
              this.router.navigate(['provider/'+this.id], {relativeTo: this.activatedRoute});

            else
              this.router.navigate(['user/'+this.id], {relativeTo: this.activatedRoute});
          // }
          this.dialogRef.close();

      });

  }
}
