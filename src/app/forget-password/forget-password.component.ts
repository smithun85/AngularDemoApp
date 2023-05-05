import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

constructor(private router:Router){}

  onSubmit():void{
    this.router.navigate(['/otp'])
    console.log(this.forgetPasswordForm.value);
  };

  forgetPasswordForm = new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
  })


}
