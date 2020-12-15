import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserstatusService } from 'src/app/services/userstatus.service';
import { TimeSlot } from '../book-service/services';
import { AppDateAdapter, APP_DATE_FORMATS } from '../book-service/dateformat';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-showcurrentstatus',
  templateUrl: './showcurrentstatus.component.html',
  styleUrls: ['./showcurrentstatus.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter},
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class ShowcurrentstatusComponent implements OnInit {

  timeSlot: TimeSlot[] = [
    {value: '09:00am - 01:00pm', viewValue: '09:00am - 01:00pm'},
    {value: '01:00pm - 05:00pm', viewValue: '01:00pm - 05:00pm'},
    {value: '05:00pm - 08:00pm', viewValue: '05:00pm - 08:00pm'}
  ];

  bookingList : any[];
  bookingCount: number;
  bookingTime: any;
  changeControl: FormGroup;
  changedValues: any;
  person: any;
  personId: any;
  count = 0;
  flag= true;

  constructor( private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder,private dialog: MatDialog , private location: Location,
    private userStatusService: UserstatusService) { }

  ngOnInit() {
    this.createForm();
    this.showActiveBookings();
  }
  showActiveBookings(){
    this.userStatusService.showBooking()
    .subscribe((bookingList)=>{
      this.bookingList = <any>bookingList;
      this.bookingCount = this.bookingList.length;
      console.log(this.bookingList);
    });
  }

  createForm() {
    this.changeControl = this.fb.group({
      timeSlot: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  change(){
    this.changedValues = this.changeControl.value;
    this.showActiveBookings();
    console.log(this.changedValues);
    this.userStatusService.changeDateTime(
      this.changeControl.value.timeSlot,
      this.changeControl.value.date)
      .subscribe((res)=>{
        console.log(res);

      });
  }

  cancel(){
    this.userStatusService.cancelBooking()
    .subscribe((res)=>{
      console.log(res);
      this.router.navigate(['user/',this.personId]);
    });
  }

  makeBooking(){
    this.person = JSON.parse(localStorage.getItem("Person"));
    this.personId = this.person._id;
    this.router.navigate(['user/',this.personId]);
  }

  urlChanging(){

    this.person = JSON.parse(localStorage.getItem("Person"));
    this.personId = this.person._id;
    // this.router.navigate(['user/',this.personId,'status',this.serviceId]);

    this.flag = !this.flag;
    if(this.flag == true){
      this.router.navigate(['user/',this.personId,'status']);
      // this.location.go('user/',this.Id,'status');
    }
  }

}
