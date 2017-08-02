import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  myForm: FormGroup;
  
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['ABC123']
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

}
