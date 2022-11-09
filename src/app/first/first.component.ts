import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private router:Router, private http: HttpClient, private data: DataService) { }

  ngOnInit(): void {
    this.usrData = this.data.getUserData();
  }

  usrData:any;
  next(){
    // this.userData.presentAddress = aaa;
    this.data.setUserData(this.usrData);
    // console.log(this.userData.presentAddress)
    this.router.navigate(['/p2'])

  }


}
