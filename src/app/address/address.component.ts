import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Address } from '../Address';


Address
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() whichOne: string="";
  presentAdd!: Address;
  permanentAdd!: Address;


 currentAdd = {
  house:"",
  road:"",
  policeStation:"",
  postOffice:"",
  postCode:"",
  district:"",
  country:"",
}

@Output() parentEvent = new EventEmitter<any>();



  constructor() {}

  sendMessage(){
    this.parentEvent.emit(this.currentAdd);
  }

  ngOnInit(): void {
  }



}
