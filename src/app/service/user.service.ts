import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = "http://localhost:8080/api";
  private user: User;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl +'/users');
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl +'/user/' + id);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(this.baseUrl + '/user/' + id, this.httpOptions);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + '/users', user, this.httpOptions);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.baseUrl + '/users', user, this.httpOptions);
  }

  setter(user: User) {
    this.user = user;
  }

  getter() {
    return this.user;
  }
}
