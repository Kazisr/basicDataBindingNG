import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: '',
  });
  isOptional = false;

  constructor(private _formBuilder: FormBuilder, private router:Router, private http: HttpClient, private data: DataService) { }

  ngOnInit(): void {
    this.usrData = this.data.getUserData();
  }

  usrData:any;

}
