import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      age: 38,
      address: {
        street: 'Kulas Light',
        suite: '556',
        city: 'Gwenborough',
        zipcode: '92998'
      }
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      age: 27,
      address: {
        street: 'Victor Plains',
        suite: '879',
        city: 'Wisokyburgh',
        zipcode: '90566'
      }
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      age: 28,
      address: {
        street: 'Douglas Extension',
        suite: '847',
        city: 'McKenziehaven',
        zipcode: '59590'
      }
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      age: 47,
      address: {
        street: 'Hoeger Mall',
        suite: '692',
        city: 'South Elvis',
        zipcode: '53919'
      }
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      age: 30,
      address: {
        street: 'Skiles Walks',
        suite: '351',
        city: 'Roscoeview',
        zipcode: '33263'
      }
    }
  ];

  public sortByOption = '';
  public sortDirection = '';

  public timestamp = 1550604643485;

  constructor() { }

  ngOnInit() {
  }

  // Sort handler
  sort() {
    this.sortByOption = document.getElementById('sortBy').value;
    this.sortDirection = document.getElementById('selectDirection').value;
  }
}
