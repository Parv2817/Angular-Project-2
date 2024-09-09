import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HeaderPatparvmComponent } from './header-patparvm/header-patparvm.component';
import { FooterPatparvmComponent } from './footer-patparvm/footer-patparvm.component';
import { BooksPatparvmComponent } from './books-patparvm/books-patparvm.component';
import { CampusPatparvmComponent } from './campus-patparvm/campus-patparvm.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderPatparvmComponent,
    FooterPatparvmComponent,
    BooksPatparvmComponent,
    CampusPatparvmComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
