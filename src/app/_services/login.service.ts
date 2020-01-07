import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  apiURL: string = 'http://localhost:3000/api/';

  loginDataPost(UserData: any){
    
    return this.httpClient.post<any>(`${this.apiURL}`+'/login/', UserData);
    
  }

  isAuthenticated(){

    let userData = "data";
    let user = JSON.parse(localStorage.getItem(userData));
    if(user){
      return true;
    }else{
      return false;
    }

  }

  private subject = new Subject<any>();

  authStatus(message: string) {
    this.subject.next({ text: message });
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

}
