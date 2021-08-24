import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AnglBstpUIModule } from 'projects/angl-bstp-ui/src/public-api';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //AnglBstpUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
