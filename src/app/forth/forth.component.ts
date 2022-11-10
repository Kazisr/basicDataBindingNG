import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../service/data.service";
import {FormBuilder} from "@angular/forms";
interface Select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-forth',
  templateUrl: './forth.component.html',
  styleUrls: ['./forth.component.css']
})
export class ForthComponent implements OnInit {

  constructor(private router:Router, private http: HttpClient, private data: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.usrData = this.data.getUserData();
  }

  usrData:any;


  bloods: Select[] = [
    {value: 'A+', viewValue: 'A+'},
    {value: 'B+', viewValue: 'B+'},
    {value: 'AB+', viewValue: 'AB+'},
    {value: 'O+', viewValue: 'O+'},
    {value: 'A-', viewValue: 'A-'},
    {value: 'B-', viewValue: 'B-'},
    {value: 'AB-', viewValue: 'AB-'},
    {value: 'O-', viewValue: 'O-'},
  ];

}
