import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { IUser } from '../_models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = "https://localhost:5001/api/";
  private currentUserSourse = new BehaviorSubject<IUser | null>(null);
  currentUser$ = this.currentUserSourse.asObservable();

  constructor(private http: HttpClient) { }

  login(model: IUser){
    return this.http.post<IUser>(this.baseUrl + "account/login",model).pipe(
      map((response: IUser) => {
        const user = response;
        if(user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUserSourse.next(user);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post<IUser>(this.baseUrl + "account/register", model).pipe(
      map(user => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUserSourse.next(user);
        }
      })
    );
  }

  setCurrentUser(user: IUser){
    this.currentUserSourse.next(user);
  }

  logout() {
    localStorage.removeItem("user");
    this.currentUserSourse.next(null);
  }
}