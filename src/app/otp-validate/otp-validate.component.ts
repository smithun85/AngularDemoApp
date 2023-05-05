import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp-validate',
  templateUrl: './otp-validate.component.html',
  styleUrls: ['./otp-validate.component.css']
})
export class OtpValidateComponent {

  constructor(private router:Router){}

  onSubmit():void{
    this.router.navigate(['/login'])
    console.log(this.otpValidate.value);
  };

  otpValidate = new FormGroup({
    otp:new FormControl('', Validators.required),
  })
}
