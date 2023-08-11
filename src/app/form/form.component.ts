// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent {
// // addNewData(newData: any) {
// //   return this.http.post('http://localhost:8080/addData', newData);
// // }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private studentService: DataService) {}
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;

      this.studentService.submitFormData(formData).subscribe(
        (res) => {
          console.log('Data submitted successfully:', res);

          // Reset the form

          this.form.reset();
        },

        (error) => {
          console.error('Error submitting data:', error);
        }
      );
    }
  }
}
