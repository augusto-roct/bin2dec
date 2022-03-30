import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-binary',
  templateUrl: './binary.component.html',
  styleUrls: ['./binary.component.scss']
})

export class BinaryComponent implements OnInit {
  valueBinary = '';
  binaryFormControl = new FormControl('');

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.binaryFormControl)
  }

  onKey(value: string) {
    const inputBinary = String(value);

    if(inputBinary.match(/^\d{7}[0-1]$/g)) {
      this.valueBinary = inputBinary;
    }

    else {
      this.binaryFormControl.setErrors({
        invalid: true
      });
    }
  }
}
