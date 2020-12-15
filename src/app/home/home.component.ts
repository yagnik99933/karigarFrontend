import { Component, OnInit } from '@angular/core';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MatDialog } from '@angular/material/dialog';
import { RegisterProviderComponent } from './register-provider/register-provider.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  public slides = [
    { src: "../../../assets/images/homepage/home1.jpg" },
    { src: "../../../assets/images/homepage/home2.jpg" }
  ];


  ngOnInit(){
    setTimeout(()=> this.onNextClick(), 5000);
    setTimeout(()=> this.onPreviousClick(), 12000);
  }

  openUserRegistrationForm() {
    const registerRef = this.dialog.open(RegisterUserComponent,
      {width: '580px', height: '510px'});

    registerRef.afterClosed()
      .subscribe((result) => {
        console.log(result);
      });
  }

  openProviderRegistrationForm() {
    const providerRegisterRef = this.dialog.open(RegisterProviderComponent,
      {width: '540px', height: '560px'});

    providerRegisterRef.afterClosed()
      .subscribe(result => {
        console.log(result);
      });
  }


  // For Smooth Scroll
  toRegister(){
    document.getElementById('register').scrollIntoView({ behavior: "smooth" });
  }

  // All under Testing
  currentSlide = 0;
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    // console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    // console.log("next clicked, new current slide is: ", this.currentSlide);
  }
}
