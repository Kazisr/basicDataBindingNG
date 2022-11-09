import { Component, OnInit } from '@angular/core';
import {DataService} from "../service/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private data: DataService, private router: Router) { }
  usrData :any;
  ngOnInit(): void {
  this.usrData = this.data.getUserData();
  }

  next(){
    this.data.setUserData(this.usrData);
    this.router.navigate(['/p3'])

  }

  recievePlaceOfBirth($event:any){
    this.usrData.placeOfBirth = $event;
  }


}
