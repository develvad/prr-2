import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HolaModule } from 'projects/hola/src/lib/hola.module';
// import { HolaModule } from 'hola'; -> PRODUCTION

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HolaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
