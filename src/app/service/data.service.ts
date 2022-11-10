import { Injectable } from '@angular/core';
export interface PhoneNum {
  number: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  userData = {
    ID:"",
    Name:{
      prefix:"",
      first:"",
      middle:"",
      last:"",
      suffix:"",
    },
    mNumber:'',
    pNumber:"",
    email:"",
    gender:"",
    religion:"",
    nationality:"",
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
      state:"",
      street1:'',
      street2:'',
    },
    permanentAddress:{
      house:"",
      road:"",
      policeStation:"",
      postOffice:"",
      postCode:"",
      district:"",
      country:"",
      state:"",
      street1:'',
      street2:'',
    },
    bloodGroup:"",
    medicaLDisAbility:"",
    DOB:"",
    placeOfBirth:{
      house:"",
      road:"",
      policeStation:"",
      postOffice:"",
      postCode:"",
      district:"",
      country:"",
      state:"",
      street1:'',
      street2:'',
    },
    NID:"",
    passpoartNum:"",
    TIN:"",
    maritalStatus:"",
    emergency:{
      name:"",
      address:"",
      mobileNo:"",
      relationship:"",

    },

  };

  setUserData(usrData:any){
  this.userData = usrData;
  }
  getUserData(){
   return this.userData;
  }
}

