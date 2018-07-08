import {FormControl, FormGroup} from '@angular/forms';

export class Helpers {

  public static validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  public static validateAllFields(formControls: Array<FormControl>) {
    for (let i = 0; i < formControls.length; i++) {
      const control = formControls[i];
      control.markAsDirty({onlySelf: true});
    }
  }

}
