import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontEndModule } from './FrontEnd/frontend.module';
//import { HeaderComponent } from './FrontEnd/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrontEndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
