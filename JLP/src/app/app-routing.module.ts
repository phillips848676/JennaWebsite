import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutJennaComponent } from './about-jenna/about-jenna.component';
import { ContactJennaComponent } from './contact-jenna/contact-jenna.component';
import { SponsorsJennaComponent } from './sponsors-jenna/sponsors-jenna.component';


const routes: Routes = [
  { path: 'about', component: AboutJennaComponent },
  { path: 'sponsor', component: SponsorsJennaComponent },
  { path: 'contact', component: ContactJennaComponent },
  { path: 'tournaments', component: ContactJennaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
