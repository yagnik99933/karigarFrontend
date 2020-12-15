import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
  FormBuilder,
} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { User } from '../../shared/user';
import { AuthService } from 'src/app/services/auth.service';
import { Cities } from '../register-provider/model';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
  providers: [
    { provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false },
    },
  ],
})

export class RegisterUserComponent implements OnInit {

  user: User;
  registeredUser: User;
  confirmpassword: string;
  form: FormGroup;
  isLinear = true;
  hideRequiredControl = new FormControl(true);
  submitted = false;

  cities: Cities[] = [
    { value: 'Dewas', viewValue: 'Dewas' },
    { value: 'Indore', viewValue: 'Indore' },
    { value: 'Ujjain', viewValue: 'Ujjain' }
  ];

  constructor(
    public dialogRef: MatDialogRef<RegisterUserComponent>,
    private authservice: AuthService,
    private fb: FormBuilder
  ) {}

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmpassword').value) {
        return {invalid: true};
    }
  }
  get formArray(): AbstractControl | null {
    return this.form.get('formArray');
  }

  ngOnInit() {
    this.form = this.fb.group({
      mobileNo: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      name: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  onSubmit(){
    this.user = this.form.value;
    console.log(this.user);
    this.authservice
      .registerUser(
        this.form.value.name,
        this.form.value.password,
        this.form.value.mobileNo,
        this.form.value.email,
        this.form.value.city
      )
      .subscribe((user: User) => {
        this.registeredUser = user;
        console.log(this.registeredUser);
      });

      this.dialogRef.close();
    }


}
