import { Component } from '@angular/core';
import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.css']
})
export class CustomValidationComponent {

  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);

      // if (checkControl.errors && !checkControl.errors.matching) {
      //   return null;
      // }

      // if (control.value !== checkControl.value) {
      //   controls.get(checkControlName).setErrors({ matching: true });
      //   return { matching: true };
      // } 
      // else {
        return null;
      // }
    };
  }


  ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors["confirmedValidator"]) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

}
