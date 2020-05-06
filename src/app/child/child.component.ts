import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit {

  @ViewChild('heading3') head3 : ElementRef;

  @ViewChild('rf') RF : ElementRef;

  @ViewChild('txtFullName') FULLNAME : ElementRef;
  fullname:string;
  phonenum:number;
  
  constructor() { 
    
  }

  ngOnInit() {
  }

  ngAfterViewInit(){

    this.head3.nativeElement.style.backgroundColor = "red";
    this.RF.nativeElement.style.backgroundColor = "yellow";
    this.FULLNAME.nativeElement.style.backgroundColor = "green";
  }


  resetRegForm(){
    this.RF.nativeElement.reset();
  }
}
