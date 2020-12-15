import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { LoginService } from 'src/app/admin-services/login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  headerFooter: boolean;
  hide = true;
  hideRequiredControl = new FormControl(true);
  user = { username: '', password: '' };

  constructor(private router: Router, private loginService: LoginService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.headerFooter = (event.url !== '/login')
      }
    });
  }

  onSubmit() {
    console.log('User: ', this.user);
    this.loginService.login(
      this.user.username,
      this.user.password)
      .subscribe((response)=>{
        console.log(response);
        this.router.navigate(['../main'], {relativeTo: this.activatedRoute});
      })
  }

}
