import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { AddressComponent } from './address/address.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from "@angular/common/http"
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { ThirdComponent } from './third/third.component';
import { ForthComponent } from './forth/forth.component';
import { FifthComponent } from './fifth/fifth.component';
import { HomeComponent } from './home/home.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    HeaderComponent,
    AddressComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ForthComponent,
    FifthComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    ReactiveFormsModule,
    BrowserModule,
    MatStepperModule,
    MatChipsModule,


  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  userData = {
    "ID":"",
    "firstName":"",
    "lastName":"",
    "faName":"",
    "faOccu":"",
    "maName":"",
    "maOccu":"",
    "pHouse":"",
    "proad":"",
    "pPolice":"",
    "pPost":"",
    "pPostCode":"",
    "pDistrict":"",
    "pCountry":"",
    "mNumber":"",
    "pNumber":"",
    "email":"",
    "gender":"",
    "religion":"",
    "nationality":"",

};

 }
