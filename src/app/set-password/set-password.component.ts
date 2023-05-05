import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent {


  constructor(private router:Router){}


 
  onSubmit():void{

    this.router.navigate(['/login'])
    console.log("Password",this.setPasswordForm.value);
  };

  setPasswordForm = new FormGroup({
    newPassword:new FormControl('',Validators.required),
    conformPassword:new FormControl('',Validators.required)
  })

}
