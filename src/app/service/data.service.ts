import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


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
    bloodGroup:"",
    amiNotunForP3:"",

  };

  setUserData(usrData:any){
  this.userData = usrData;
  }
  getUserData(){
   return this.userData;
  }
}

