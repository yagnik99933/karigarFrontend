import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { AuthService } from '../services/auth.service';
import { ProviderstatusService } from '../services/providerstatus.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  Id: string; //-> Used in navigation in Profile
  url: any;
  notifications = [];
  notificationCount: number; // -> ye ek notificationCount ko refer krega

  // For custom headers, taking out info. from Local Storage.
  person: any;
  user: boolean;
  flag = true;

  //For notification display
  displayFlag = true;
  bookingTimeStamp: any;
  sysTimeStamp: any;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    public authService: AuthService,
    private providerStatusService: ProviderstatusService
  ) {}

  ngOnInit() {
    this.customHeader();
  }

  customHeader() {
    this.person = localStorage.getItem('Person');

    if (this.person != null) {
      this.person = JSON.parse(this.person);
      this.user = this.person.user;
      this.Id = this.person._id;
    }
    if (this.user == false && this.flag == true) {
      this.notificationService.notify()
      .subscribe((notification) => {
        this.notifications = [];
          for (let n of notification) {
            if (n.cancel == this.Id)
            {}
            else {
              this.bookingTimeStamp = n.updatedAt.toString();
              this.bookingTimeStamp = Date.parse(this.bookingTimeStamp);
              console.log(this.bookingTimeStamp);
              this.sysTimeStamp = new Date().getTime();
              // console.log(this.sysTimeStamp);
              // console.log(this.sysTimeStamp - this.bookingTimeStamp);
              if(this.sysTimeStamp - this.bookingTimeStamp < 3600000) {
                this.notifications.push(n);
                this.notificationCount = this.notifications.length;
                // console.log(this.notificationCount);
                }
            }
          }

        // console.log(this.notificationCount);
      });
      this.flag = false;
    }
    return this.user;
  }

  // Notification ki accept button ki method
  acceptNotification(serviceId) {
    console.log(this.router.url);

    if (this.notificationCount == 1) {
      this.notificationCount = 0;
    }
    this.notificationService
      .acceptNotification(serviceId)
      .subscribe((details) => {
        if (this.router.url == '/provider/' + this.Id + '/status') {
          this.router.navigate(['provider/', this.Id]);
        } else {
          this.router.navigate(['provider/', this.Id, 'status']);
        }
        this.flag = true;
        this.customHeader();
      });
  }

  // To open User Profile.
  openUserProfile() {
    // this.person = localStorage.getItem("Person");
    this.Id = this.person._id;
    console.log(this.Id);
    this.router.navigate(['user/', this.Id, 'profile']);
  }

  // To open Provider Profile
  openProviderProfile() {
    this.Id = this.person._id;
    console.log(this.Id);
    this.router.navigate(['provider/', this.Id, 'profile']);
  }

  openLoginForm() {
    const loginRef = this.dialog.open(LoginComponent, {
      width: '500px',
      height: '430px',
    });
    loginRef.afterClosed();
  }

  // To open Dashoboard
  openDashboard() {
    if (this.user == true) {
      this.router.navigate(['user/', this.Id]);
    } else {
      this.router.navigate(['provider/', this.Id]);
    }
  }

  // For smooth scrolling
  toRegister(){
    document.getElementById('register').scrollIntoView({ behavior: "smooth" });
  }
  toServices(){
    document.getElementById('services').scrollIntoView({ behavior: "smooth" });
  }
}
