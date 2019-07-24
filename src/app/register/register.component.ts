import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../_services/register.service';
import { User } from '../_services/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fullImagePath: String;
  angularImagePath: String;
  nodejsImagePath: String;
  jwtImagePath: String;

  constructor(private registerService: RegisterService) { 
    this.fullImagePath = 'assets/images/banner.jpg';
    this.angularImagePath = 'assets/images/angular.jpg';
    this.nodejsImagePath = 'assets/images/nodejs.jpg';
    this.jwtImagePath = 'assets/images/jwt.jpg';
  }

  ngOnInit() {
    
  }


  registerForm = new FormGroup({
        fullname:   new FormControl(''),
        username :  new FormControl(''),
        email:      new FormControl(''),
        password :  new FormControl(''),
        cpassword:  new FormControl('')
  });

  onSubmit(){

    this.registerService.register(this.registerForm.value).subscribe((res) => {

      console.log(res);

    });

  }

}
