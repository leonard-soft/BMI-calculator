import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule]
})
export class FormComponent {

  public imc (weight: any, height: any) {
   let newHeight: any = height / 100;
   let BMI: Number = (weight / (newHeight * newHeight));
   let NBMI: Number =  parseFloat(String(BMI));

   Swal.fire(
    'Your BMI is:',
    `${NBMI.toFixed(2)}`,
    'success'
  );

  }

  public calculate() {
    
    let BaseWeight: any = document.querySelector("#weight");
    let weight: String = BaseWeight.value;
    let Number1: any = parseInt(BaseWeight.value);

    let BaseHeight: any = document.querySelector("#height");
    let height: String = BaseHeight.value;
    let Number2: any = parseInt(BaseHeight.value);

    if (weight.length > 0 && (Number1 > 8 && Number1 < 120)) {
       BaseWeight.classList.remove('is-invalid');
       BaseWeight.classList.add('is-valid');
    } else {
      BaseWeight.classList.add('is-invalid');
    }

    if (height.length > 0 && (Number2 > 32 && Number2 < 215)) {
      BaseHeight.classList.remove('is-invalid');
      BaseHeight.classList.add('is-valid');
   } else {
    BaseHeight.classList.add('is-invalid');
   }

   if (BaseWeight.className == "form-control is-invalid" && BaseHeight.className == "form-control is-invalid") {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please enter a valid weight and height!',
    });
   } else {
      this.imc(Number1, Number2);
   }


    
  }
}
