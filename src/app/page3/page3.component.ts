import { Component, OnInit } from '@angular/core';
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor(private data:DataService) { }

  usrData :any;
  ngOnInit(): void {
    this.usrData = this.data.getUserData();
  }
}
