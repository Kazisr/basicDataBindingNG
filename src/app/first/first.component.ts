import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../service/data.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from '@angular/material/chips';

export interface PhoneNum {
  number: string;
}

interface Select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private router:Router, private http: HttpClient, private data: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.usrData = this.data.getUserData();
  }

  usrData:any;


  genders: Select[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
    {value: 'Other', viewValue: 'Female'},
  ];

  religions: Select[] = [
    {value: 'Islam', viewValue: 'Islam'},
    {value: 'Hinduism', viewValue: 'Hinduism'},
    {value: 'Christanity', viewValue: 'Christanity'},
    {value: 'Buddhisht', viewValue: 'Buddhisht'},
  ];

  next(){
    // this.userData.presentAddress = aaa;
    this.data.setUserData(this.usrData);
    // console.log(this.userData.presentAddress)
    this.router.navigate(['/p2'])

  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  phnNumbers: PhoneNum[] = [];
  mobNumbers: PhoneNum[] = [];

  add(event: MatChipInputEvent): void {
    this.usrData.pNumber = this.phnNumbers;
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.phnNumbers.push({number: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: PhoneNum): void {
    const index = this.phnNumbers.indexOf(fruit);

    if (index >= 0) {
      this.phnNumbers.splice(index, 1);
    }
  }


  addMob(event: MatChipInputEvent): void {
    this.usrData.mNumber = this.mobNumbers;
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.mobNumbers.push({number: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeMob(fruit: PhoneNum): void {
    const index = this.mobNumbers.indexOf(fruit);

    if (index >= 0) {
      this.mobNumbers.splice(index, 1);
    }
  }

}

