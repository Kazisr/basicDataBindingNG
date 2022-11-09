import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private router:Router, private http: HttpClient, private data: DataService) { }

  ngOnInit(): void {
    this.usrData = this.data.getUserData();
  }

  recievePresent($event:any){
    this.usrData.presentAddress = $event;
  }
  recievePermanent($event:any){
    this.usrData.permanentAddress = $event;
  }

  usrData:any;
  next(){
    // this.userData.presentAddress = aaa;
    this.data.setUserData(this.usrData);
    // console.log(this.userData.presentAddress)
    this.router.navigate(['/p4'])

  }

}
