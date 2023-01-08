import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ChildComponent } from './child/child.component';
import { Test123Component } from './test123/test123.component';
import { C11Component } from './c11/c11.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SidemenuComponent,
    ChildComponent,
    Test123Component,
    C11Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

NgxBootstrapSliderModule,

    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
