import { User } from './../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getListUsers(): Observable<User[]> {
    let url = 'https://localhost:44374/GetListUser/';
    return this.http.get<User[]>(url);
  }
}
