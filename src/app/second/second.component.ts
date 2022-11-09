import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../service/data.service";
interface Select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  occupationsFa: Select[] = [
    {value: 'Agriculture', viewValue: 'Agriculture'},
    {value: 'NGO service', viewValue: 'NGO service'},
    {value: 'Private job holder', viewValue: 'Private job holder'},
  ];

  occupationsMa: Select[] = [
    {value: 'Home Maker', viewValue: 'Home Maker'},
    {value: 'Chef', viewValue: 'Chef'},
    {value: 'Teacher', viewValue: 'Teacher'},
  ];
  constructor(private router:Router, private http: HttpClient, private data: DataService) { }

  ngOnInit(): void {
    this.usrData = this.data.getUserData();
  }

  usrData:any;
  next(){
    // this.userData.presentAddress = aaa;
    this.data.setUserData(this.usrData);
    // console.log(this.userData.presentAddress)
    this.router.navigate(['/p3'])

  }
}
