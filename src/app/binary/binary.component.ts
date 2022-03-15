import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary',
  templateUrl: './binary.component.html',
  styleUrls: ['./binary.component.scss']
})
export class BinaryComponent implements OnInit {
  valueBinary = '';

  constructor() {
   }

  ngOnInit(): void {
  }

  onKey(event: any) {
    const value = event.target.value;

    if(value.length <= 8) {
      this.valueBinary = value;
    }

    else {
      this.valueBinary = ''
    }
  }
}
