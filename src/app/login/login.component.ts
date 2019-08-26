import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../_services/login.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";
  errorMessage:string = "";

  constructor(private loginService: LoginService, public router: Router) { }
  
  ngOnInit() {
  }

  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.minLength(4)]),
    password: new FormControl('',[Validators.required, Validators.minLength(4)])
  });

  onSubmit(){

     let loggedIn = false;
     // Call login service
     this.loginService.loginDataPost(this.loginForm.value).subscribe((data)=>{
         let userData = jwt_decode(data);
         // If successfuly loggedin then it will redirect to dashboard
         if(userData.auth){
          let sessionData = "data";
          localStorage.setItem(sessionData, JSON.stringify(userData));
          loggedIn = true;
          this.router.navigate(['/dashboard'])
         }else{
          this.errorMessage = userData.message;
         } 
         
     });

  }

}
