import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  apiURL: string = 'http://localhost:3000/api/register/';

  registerDataPost(UserData: any){
    
    return this.httpClient.post<any>(`${this.apiURL}`, UserData);

  }
  
}
