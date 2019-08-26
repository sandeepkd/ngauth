import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../_services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) { }
  errorMsg='';
  ngOnInit() { }

  registerForm = new FormGroup({
        fullname:   new FormControl('',[Validators.required]),
        username :  new FormControl('',[Validators.required]),
        email:      new FormControl('',[Validators.required, Validators.email]),
        password :  new FormControl('',[Validators.required]),
        cpassword:  new FormControl('',[Validators.required])
  });

  onSubmit(){

    if(this.registerForm.value.password === this.registerForm.value.cpassword){

      this.registerService.registerDataPost(this.registerForm.value).subscribe((res) => {
        console.log(this.registerForm.value);
      });

    }else{

      var errorMsg:string ="Password and confirm passwords are not matching.";
      
    }
  }
}
