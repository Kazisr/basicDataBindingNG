import { Injectable } from '@angular/core';

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
    mNumber:"",
    pNumber:"",
    email:"",
    gender:"",
    religion:"",
    nationality:"",
    state:"",
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

