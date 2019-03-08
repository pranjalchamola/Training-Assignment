import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  constructor() { }
arr = [{
    "FirstName": "Pranjal",
    "LastName": "Chamola",
    "Email": "[pranjalchamola]@gmail.com",
    "Id": 1,
    "PhoneNumber": 95451489425,
    "Designation": "Pro Gamer",
    "DOB": 15091996
},
{
    "FirstName": "Ajay",
    "LastName": "Ladka",
    "Email": "ajayG@gmail.com",
    "Id": 2,
    "PhoneNumber": 907731645,
    "Designation": "Tuster",
    "DOB": 21091997
},
{
    "FirstName": "Vipin",
    "LastName": "Chand",
    "Email": "vipinc@gmail.com",
    "Id": 3,
    "PhoneNumber": 945487231,
    "Designation": "Sweeper Head",
    "DOB": 2031999
},
{
    "FirstName": "Avii",
    "LastName": "Gupt",
    "Email": "guptavi@gmail.com",
    "Id": 4,
    "PhoneNumber": 9545145456,
    "Designation": "Doctor",
    "DOB": 19041998
},
{
    "FirstName": "Deepak",
    "LastName": "Kalal",
    "Email": "kalal@gmail.com",
    "Id": 5,
    "PhoneNumber": 9554899889,
    "Designation": "Youtuber",
    "DOB": 15121991
}

]
  newArray;

  setdata() {
    this.newArray = this.arr;
  }
  getdata() {
    return this.newArray;
  }
}
