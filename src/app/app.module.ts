import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';  //reactive Form lives here



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';

import { LayoutModule } from './layout/layout.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { OtpValidateComponent } from './otp-validate/otp-validate.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';
import { UsersDataComponent } from './users/users-data/users-data.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UsersComponent,
    ForgetPasswordComponent,
    CustomErrorComponent,
    UserDetailsComponent,
    SetPasswordComponent,
    OtpValidateComponent,
    CustomValidationComponent,
    UsersDataComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    TooltipModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
