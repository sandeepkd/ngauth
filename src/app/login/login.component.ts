import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
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

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(){

    console.log('It Works');
    console.warn(this.loginForm.value);

  }

}
