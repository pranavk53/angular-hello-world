import { Component, Input, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {


  
constructor(private _http:HttpClient){

}

  title = 'app';

  arr1 = [1,2,3,4,5];

  menu:string='';

  @ViewChild("txtUname") uname : ElementRef;

  ngOnInit(){

    this.uname.nativeElement.style.color="red";
  }

  getSubMenu(m){
    
    this.menu=m;
  }


  testInterpolation1(){

    return "interpolation function";
  }


  testInterpolation2(){

    let a=1;
  }

  private result1:any = "Test1";
  private result2:any = "Test2";
  private resSubscription : Subscription;
  f1(){

    let res1 = this.getPost1();    
    this.resSubscription = res1.subscribe((response:any) => {

      this.result1 = "Observable -- " + JSON.stringify(response);
    },
    (error:any) => {
      this.result1 = "Observable error -- " + error.message;
    }
    );
    
    
    let res2 = this.getPost2();
    res2.toPromise().then((response:any) => {

      this.result2 = "Promise -- " + JSON.stringify(response);
    },
    (error:any)=> {
      this.result2 = "Promise error -- " + error.message;
    }
    );

  }

  getPost1(){

    return this._http.get("https://jsonplaceholder.typicode.com/posts/1");
  }

  getPost2(){

    return this._http.get("https://jsonplaceholder.typicode.com/posts/2");
  }


  ngOnDestroy(){

    this.resSubscription.unsubscribe();

  }


}
