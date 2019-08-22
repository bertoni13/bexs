import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { JsonpModule, Jsonp } from '@angular/http';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { RestService } from './api/api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, BrowserAnimationsModule, JsonpModule, ToasterModule.forRoot()
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
