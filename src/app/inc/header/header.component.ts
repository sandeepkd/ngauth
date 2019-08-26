import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../../_services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn:boolean = false;
  subscription: Subscription;
  
  constructor(private loginService: LoginService) { 

    this.subscription = this.loginService.getMessage().subscribe(message => {
      if (message.text=='success') {
        this.loggedIn=true;
      } else {
        // clear messages when empty message received
        this.loggedIn=false;
      }
    });

  }

  ngOnInit() {}

}
