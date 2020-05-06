import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  /*myForm = new FormGroup({
    myDateYMD: new FormControl(new Date()),
    myDateFull: new FormControl(new Date()),
    myDateMDY: new FormControl(new Date())
  });*/

  minPrice:any;
  maxPrice:any;
  value:any=[];

  constructor() { 

    this.minPrice = 0;
    this.maxPrice = 10000;

    this.value=[0,10000]
  }

  ngOnInit() {
  }

  search(){



    console.log('searching');
  }

}
