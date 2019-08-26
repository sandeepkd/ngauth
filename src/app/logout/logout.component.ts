import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  loggedIn:boolean = false;
  constructor(private loginService: LoginService, public router: Router) { }

  ngOnInit() {
    localStorage.clear();
    this.loginService.authStatus('logout');
    this.router.navigate(['/login']);
  } 

}
