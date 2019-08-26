import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  username:string="";
  email:string="";
  name:string="";
  message:string;
  ngOnInit() {
      let userData = "data";
      let user = JSON.parse(localStorage.getItem(userData));
      this.username = user.username;
      this.email = user.email;
      this.name = user.name;
      this.message = "You are loggedin!!"
      this.loginService.authStatus('success');
  }

}
