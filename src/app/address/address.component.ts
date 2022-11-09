import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Address } from '../Address';
interface Select {
  value: string;
  viewValue: string;
}

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

  countries: Select[] = [
    {value: 'Bangladesh', viewValue: 'Bangladesh'},
    {value: 'Russia', viewValue: 'Russia'},
    {value: 'Canada', viewValue: 'Canada'},
  ];

  ruSates: Select[] = [
    {value: 'Adygea', viewValue: 'Adygea'},
    {value: 'Tatarstan', viewValue: 'Tatarstan'},
    {value: 'Khakassia', viewValue: 'Khakassia'},
  ];

  divisions: Select[] = [
    {value: 'Dhaka', viewValue: 'Dhaka'},
    {value: 'Mymenshingh', viewValue: 'Mymenshingh'},
    {value: 'Barishal', viewValue: 'Barishal'},
  ];

  districtsDHK: Select[] = [
    {value: 'Dhaka', viewValue: 'Dhaka'},
    {value: 'Rajbari', viewValue: 'Rajbari'},
    {value: 'Manikgonj', viewValue: 'Manikgonj'},
  ];

  districtsMYM: Select[] = [
    {value: 'Mymenshingh', viewValue: 'Mymenshingh'},
    {value: 'Muktagacha', viewValue: 'Muktagacha'},
    {value: 'Fulbaria', viewValue: 'Fulbaria'},
  ];

  districtsAll: Select[] = [
    {value: 'Mymenshingh', viewValue: 'Mymenshingh'},
    {value: 'Muktagacha', viewValue: 'Muktagacha'},
    {value: 'Fulbaria', viewValue: 'Fulbaria'},
    {value: 'Mymenshingh', viewValue: 'Mymenshingh'},
    {value: 'Muktagacha', viewValue: 'Muktagacha'},
    {value: 'Fulbaria', viewValue: 'Fulbaria'},
  ];
  dhakaThanas: Select[] = [
    {value: 'Motijhil', viewValue: 'Motijhil'},
    {value: 'Uttara', viewValue: 'Uttara'},
    {value: 'Mirpur', viewValue: 'Mirpur'},
  ];

  cities: Select[] = [
    {value: 'Moscow', viewValue: 'Moscow'},
    {value: 'Saint Petersburg', viewValue: 'Saint Petersburg'},
    {value: 'Novosibirsk', viewValue: 'Novosibirsk'},
    {value: 'Ontario', viewValue: 'Ontario'},
    {value: 'Toronto', viewValue: 'Toronto'},
    {value: 'Quebec', viewValue: 'Quebec'},

  ];

 currentAdd = {
   house:"",
   road:"",
   policeStation:"",
   postOffice:"",
   postCode:"",
   district:"",
   country:"Bangladesh",
   division:"",
   state:"",
   street1:'',
   street2:'',
}

@Output() parentEvent = new EventEmitter<any>();



  constructor() {}

  sendMessage(){
    this.parentEvent.emit(this.currentAdd);
  }

  ngOnInit(): void {
  }



}
