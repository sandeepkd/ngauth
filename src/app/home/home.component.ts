import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fullImagePath: String;
  angularImagePath: String;
  nodejsImagePath: String;
  jwtImagePath: String;

  constructor() { 
    this.fullImagePath = 'assets/images/banner.jpg';
    this.angularImagePath = 'assets/images/angular.jpg';
    this.nodejsImagePath = 'assets/images/nodejs.jpg';
    this.jwtImagePath = 'assets/images/jwt.jpg';
  }

  ngOnInit() {
  }

}
