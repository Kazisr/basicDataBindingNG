import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {ThirdComponent} from "./third/third.component";
import {ForthComponent} from "./forth/forth.component";
import {FifthComponent} from "./fifth/fifth.component";

const routes: Routes = [

  { path: '', component: FirstComponent},
  { path: 'p2', component: SecondComponent},
  { path: 'p3', component: ThirdComponent},
  { path: 'p4', component: ForthComponent},
  { path: 'p5', component: FifthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
