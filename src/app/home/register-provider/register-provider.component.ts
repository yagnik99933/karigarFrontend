import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { ServiceGroup } from 'src/app/user-main/book-service/services';
import { Provider } from '../../shared/provider';
import { Cities } from './model';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-provider',
  templateUrl: './register-provider.component.html',
  styleUrls: ['./register-provider.component.scss'],
})
export class RegisterProviderComponent implements OnInit {

  provider: Provider;
  regprovider: Provider;
  registerPro: FormGroup;
  hideRequiredControl = new FormControl(true);
  serviceControl = new FormControl();

  serviceGroups: ServiceGroup[] = [
    {
      name: 'Home',
      services: [
        { value: 'Electrician', viewValue: 'Electrician' },
        { value: 'Plumber', viewValue: 'Plumber' },
        { value: 'Painter', viewValue: 'Painter' },
        { value: 'Maid', viewValue: 'Maid' },
        { value: 'Packing And Mover', viewValue: 'Packing And Mover' },
        { value: 'Appliance Repair', viewValue: 'Appliance Repair' },
        { value: 'Home Cleaning', viewValue: 'Home Cleaning' },
        { value: 'Pest Control', viewValue: 'Pest Control' },
        { value: 'Water Tank Cleaning', viewValue: 'Water Tank Cleaning' },
      ],
    },
    {
      name: 'Outdoors',
      services: [
        { value: 'Mess', viewValue: 'Mess' },
        { value: 'Hostel & PG', viewValue: 'Hostel & PG' },
        { value: 'Property Broker', viewValue: 'Property Broker' },
        { value: 'Salon', viewValue: 'Salon' },
        { value: 'Laundry', viewValue: 'Laundry' },
      ],
    },
    {
      name: 'Other',
      services: [
        { value: 'Photographer', viewValue: 'Photographer' },
        { value: 'Pharmacy', viewValue: 'Pharmacy' },
        { value: 'Shine Board', viewValue: 'Shine Board' },
        { value: 'Car Cleaning', viewValue: 'Car Cleaning' },
        { value: 'Event Management', viewValue: 'Event Management' },
      ],
    }
  ];

  cities: Cities[] = [
    { value: 'Dewas', viewValue: 'Dewas' },
    { value: 'Indore', viewValue: 'Indore' },
    { value: 'Ujjain', viewValue: 'Ujjain' }
  ];

  areas =[ 'Abhinandan Nagar Road', 'Alok Nagar Row Houses', 'Annapurna Road','Anoop Nagar',
  'Ashish Nagar','Bairathi Colony', 'Bengali Square', 'Bicholi Hapsi Road', 'Bicholi Mardana Road',
  'Chhavni', 'Dhar Road', 'Girdhar Nagar', 'IDA Scheme 140', 'Jail Road'];

  constructor(
    public dialogRef: MatDialogRef<RegisterProviderComponent>,
    private fb: FormBuilder,
    private authservice: AuthService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerPro = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      mobileNo: ['', Validators.required],
      serviceType: ['', Validators.required],
      email: ['', Validators.required],
      area: [''],
      city: ['', Validators.required],
    });
  }

  onSubmit() {
    this.provider = this.registerPro.value;
    // console.log(this.registerPro.value.area);
    console.log(this.provider);
    this.authservice
      .registerProvider(
        this.registerPro.value.name,
        this.registerPro.value.password,
        this.registerPro.value.mobileNo,
        this.registerPro.value.serviceType,
        this.registerPro.value.email,
        this.registerPro.value.area,
        this.registerPro.value.city
      )
      .subscribe((prov: Provider) => {
        this.regprovider = prov;
        console.log(this.regprovider);

      });
      this.toastrService.success('Successfully.', 'Category Updated',{
        timeOut: 3000,
        easeTime: 1000,
        progressBar: true,
        positionClass: 'toast-center-center'
      });
      this.dialogRef.close();
  }
}

