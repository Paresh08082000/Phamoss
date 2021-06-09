import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUSComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fname="";
  lname="";
  area="";
  tel="";
  email="";
  getUserValue(val){
    this.fname=val.firstname;
    this.lname=val.lastname;
    this.area=val.areacode;
    this.tel=val.telnum;
    this.email=val.emailid;
    alert("your details: Name: " + this.fname + " " + this.lname + " area box "+ this.area + " telephone number :" + this.tel
    + " Email :" +this.email);

  }
}
