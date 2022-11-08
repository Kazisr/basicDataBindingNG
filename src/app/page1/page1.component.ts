import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../service/data.service";



@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
[x: string]: any;
  // userData:User = new User();


  constructor(private router:Router, private http: HttpClient, private data: DataService) { }

  ngOnInit(): void {
  }

  next(){
  // this.userData.presentAddress = aaa;
    this.data.setUserData(this.userData);
    // console.log(this.userData.presentAddress)
    this.router.navigate(['/p2'])

  }

  selectedFile = null;
    onFileSelected(event:any){
      this.selectedFile=event.target.files[0];
  }

  onUpload(){
  // this.http.post("");
  }


  recievePresent($event: { house: string; road: string; policeStation: string; postOffice: string; postCode: string; district: string; country: string; }){
    this.userData.presentAddress = $event;
  }
  recievePermanent($event: { house: string; road: string; policeStation: string; postOffice: string; postCode: string; district: string; country: string; }){
    this.userData.permanentAddress = $event;
  }
 currentAdd = {
  house:"",
  road:"",
  policeStation:"",
  postOffice:"",
  postCode:"",
  district:"",
  country:"",
}

  userData = {
    ID:"",
    Name:{
      first:"",
      last:"",
      suffix:"",
    },
    faName:"",
    faOccu:"",
    maName:"",
    maOccu:"",
    presentAddress:{
      house:"",
      road:"",
      policeStation:"",
      postOffice:"",
      postCode:"",
      district:"",
      country:"",
    },
    permanentAddress:{
      house:"",
      road:"",
      policeStation:"",
      postOffice:"",
      postCode:"",
      district:"",
      country:"",
    },
    mNumber:"",
    pNumber:"",
    email:"",
    gender:"",
    religion:"",
    nationality:"",
    state:"",

};

}
