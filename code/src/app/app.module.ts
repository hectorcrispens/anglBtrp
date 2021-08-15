import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BootUIModule } from 'boot-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BootUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
