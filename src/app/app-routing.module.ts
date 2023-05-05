import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { UsersComponent } from './users/users.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { OtpValidateComponent } from './otp-validate/otp-validate.component';

const routes: Routes = [
  {
    path:'',
    component:AuthLayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
      },
      {
        path:'login',
        component:LoginComponent
      },
    
      {
        path:'registration',
        component:RegistrationComponent
      },
    
      {
        path:'forgetPassword',
        component:ForgetPasswordComponent
      },

      {
        path:'otp',
        component:OtpValidateComponent
      },

      {
        path:'setPassword',
        component:SetPasswordComponent
      }
    ]
  },
  
{
  path:'',
  component:MainLayoutComponent,
  children:[
    // {
    //   path:'dashboard',
    //   component:DashboardComponent
    // },
    {
      path:'users',
      component:UsersComponent
    },
    {
      path:'users/:id',
      // path:'userDetail',
      component:UserDetailsComponent
    }
  ]
},

{
  path:'**',
  component:CustomErrorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
