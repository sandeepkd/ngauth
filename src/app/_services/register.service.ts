import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from  './user';
import { JwtResponse } from  './jwt-response';
import { from } from 'rxjs';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  apiHost : String = 'http://localhost:3000';
  registerApiEndPoint = this.apiHost+'/api/register';

  register(user: User): Observable<JwtResponse> {
  return this.httpClient.post<JwtResponse>(`${this.registerApiEndPoint}`, user).pipe(
    tap((res:  JwtResponse ) => {

      if (res.user) {
        localStorage.set("ACCESS_TOKEN", res.user.access_token);
        localStorage.set("EXPIRES_IN", res.user.expires_in);
        //this.authSubject.next(true);
      }
    })

  );
}


}
