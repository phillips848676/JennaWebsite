import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatDividerModule } from '@angular/material/divider';
import { AboutJennaComponent } from './about-jenna/about-jenna.component';
import { ContactJennaComponent } from './contact-jenna/contact-jenna.component';
import { SponsorsJennaComponent } from './sponsors-jenna/sponsors-jenna.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutJennaComponent,
    ContactJennaComponent,
    SponsorsJennaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
