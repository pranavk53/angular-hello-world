import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  @Input() public menuname : any;

  submenu:any = []

  constructor() { }

  ngOnInit() {

    

  }

  ngOnChanges(){
    
    switch(this.menuname){

      case "home" : this.submenu = [11,22,33,44,55]; break;
      case "page1" : this.submenu = [111,222,333,444,555]; break;
      case "page2" : this.submenu = [1111,2222,3333,4444,5555]; break;
      case "page3" : this.submenu = [66,77,88,99]; break;
      default : this.submenu = [11,22,33,44,55]; break; 
    }    
  }

  

}
