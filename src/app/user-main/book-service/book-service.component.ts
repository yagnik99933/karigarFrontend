import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Booking } from 'src/app/shared/booking';
import { Services, ServiceGroup, Cities, TimeSlot } from './services';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from './dateformat';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeIn, fadeOut, scaleIn, scaleOut } from '../../animation/animations';
import { trigger, transition, useAnimation } from '@angular/animations';
import { interval } from 'rxjs';

@Component({
  selector: 'app-book-service',
  templateUrl: './book-service.component.html',
  styleUrls: ['./book-service.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter},
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ],
  animations: [
    trigger("Fade", [
      transition("void => *", [useAnimation(fadeIn, {params: { time: '1400ms' }} )]),
      transition("* => void", [useAnimation(fadeOut, {params: { time: '1400ms' }})]),
    ]),
    trigger("Scale", [
      /* scale */
      transition("void => *", [useAnimation(scaleIn, {params: { time: '1200ms' }} )]),
      transition("* => void", [useAnimation(scaleOut, {params: { time: '1200ms' }})]),
    ]),
  ]
})
export class BookServiceComponent implements OnInit {

  bookservice: Booking;
  bookingControl: FormGroup;
  services: Services;
  next: Booking;
  paymentSuccess = false;
  htmlString = '';

  // Person who is logged in details:
  person: any;
  personName: string;
  personId: string;

  floatLabelControl = new FormControl('auto');

  public slides = [
    { src: "../../../assets/images/BookService/image1.jpg" },
    { src: "../../../assets/images/BookService/image2.jpg" }
  ];


  timeSlot: TimeSlot[] = [
    {value: '09:00am - 01:00pm', viewValue: '09:00am - 01:00pm'},
    {value: '01:00pm - 05:00pm', viewValue: '01:00pm - 05:00pm'},
    {value: '05:00pm - 08:00pm', viewValue: '05:00pm - 08:00pm'}
  ];

  serviceControl = new FormControl();
  serviceGroups: ServiceGroup[] = [
    {
      name: 'Home',
      services: [
        {value: 'Electrician', viewValue: 'Electrician'},
        {value: 'Plumber', viewValue: 'Plumber'},
        {value: 'Carpenter', viewValue: 'Carpenter'},
        {value: 'Painter', viewValue: 'Painter'},
        // {value: 'Maid', viewValue: 'Maid'},
        {value: 'Packing&Mover', viewValue: 'Packing And Mover'},
        // {value: 'ApplianceRepair', viewValue: 'Appliance Repair'},
        {value: 'HomeCleaning', viewValue: 'Home Cleaning'},
        {value: 'PestControl', viewValue: 'Pest Control'},
        {value: 'WaterTankCleaning', viewValue: 'Water Tank Cleaning'},
        {value: 'Fabrication', viewValue: 'Fabrication'},
        {value: 'HomeAppliances', viewValue: 'Home Applicances'}
      ]
    },
    {
      name: 'Outdoors',
      services: [
        // {value: 'Mess', viewValue: 'Mess'},
        // {value: 'Hostel&PG', viewValue: 'Hostel & PG'},
        // {value: 'PropertyBroker', viewValue: 'Property Broker'},
        // {value: 'Salon', viewValue: 'Salon'},
        {value: 'Laundry', viewValue: 'Laundry'},
        {value: 'Mistri', viewValue: 'Mistri'},
      ]
    },
    {
      name: 'Other',
      services: [
        {value: 'Photographer', viewValue: 'Photographer'},
        // {value: 'Pharmacy', viewValue: 'Pharmacy'},
        // {value: 'ShineBoard', viewValue: 'Shine Board'},
        {value: 'CarSpa', viewValue: 'Car Cleaning'},
        // {value: 'EventManagement', viewValue: 'Event Management'},
      ]
    }
  ];

  cities: Cities[] = [
    {value: 'Dewas', viewValue: 'Dewas'},
    {value: 'Indore', viewValue: 'Indore'},
    {value: 'Ujjain', viewValue: 'Ujjain'}
  ];

  areas =[ 'Abhinandan Nagar Road', 'Alok Nagar Row Houses', 'Annapurna Road','Anoop Nagar',
  'Ashish Nagar','Bairathi Colony', 'Bengali Square', 'Bicholi Hapsi Road', 'Bicholi Mardana Road',
  'Chhavni', 'Dhar Road', 'Girdhar Nagar', 'IDA Scheme 140', 'Jail Road'];


  constructor(private snackBar: MatSnackBar, public dialog: MatDialog,public router: Router,
    private fb: FormBuilder, private bookService: BookService, private route: ActivatedRoute) {}

  ngOnInit(){
    this.createForm();
    this.person = JSON.parse(localStorage.getItem("Person"));
    this.personName = this.person.name;
    this.personId = this.person._id;
    console.log(this.personId);

    // For image changing
    interval(7000).subscribe((x)=>{
      this.onNextClick();
    });
  }

  createForm() {
    this.bookingControl = this.fb.group({
      city: ['', Validators.required],
      serviceType: ['', Validators.required],
      name: ['', Validators.required],
      mobileNo: ['', Validators.required],
      houseNo: ['', Validators.required],
      colony: ['', Validators.required],
      area: ['', Validators.required],
      landmark: ['', Validators.required],
      date: ['', Validators.required],
      timeSlot: ['', Validators.required]
    });
  }

    booking(){
      // console.log(this.personId);

      // window.location.href = 'user/'+this.personId+'/bookservice/'+'payment';
      // window.open('user/'+this.personId+'/bookservice/'+'payment');

      this.bookservice = this.bookingControl.value;

      console.log(this.bookservice);
      this.bookService.booking(
        this.bookingControl.value.city,
        this.bookingControl.value.serviceType,
        this.bookingControl.value.name,
        this.bookingControl.value.mobileNo,
        this.bookingControl.value.houseNo,
        this.bookingControl.value.colony,
        this.bookingControl.value.area,
        this.bookingControl.value.landmark,
        this.bookingControl.value.date,
        this.bookingControl.value.timeSlot)
        .subscribe((bookingdetails) => {
          console.log(bookingdetails);
          this.router.navigate(['user/',this.personId,'status']);
          // this.paymentSuccess = true;
        });

    }

    urlChange(){
      // this.router.navigate(['user/',this.personId,'bookservice','payment']);
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
