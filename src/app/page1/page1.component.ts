import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
[x: string]: any;
  // userData:User = new User();


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  next(){
  // this.userData.presentAddress = aaa;

    console.log(this.userData);
    // console.log(this.userData.presentAddress)
    this.router.navigate(['/p2'])

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
