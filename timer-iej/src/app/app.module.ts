import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdTimerModule } from 'angular-cd-timer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdTimerModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
