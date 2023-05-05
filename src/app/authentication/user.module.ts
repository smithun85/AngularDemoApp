import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpValidateComponent } from './components/otp-validate/otp-validate.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';




@NgModule({
  declarations: [
   
  
    OtpValidateComponent,
           SetPasswordComponent,
           ForgotPasswordComponent,
           LoginComponent,
           RegistrationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
