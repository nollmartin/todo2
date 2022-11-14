import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, users } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loggedUser!: User | undefined

  constructor(private router: Router) {
    const user = localStorage.getItem('user');
    if(user) {
      this._loggedUser = JSON.parse(user)
    }
  }

  get loggerUser() {
    return this._loggedUser
  }

  login(username: string, password: string) {
    let user:User = {name: username, password: password}
    users.forEach((_user) => {
      if(_user.name==username && _user.password==password) {
        this._loggedUser=user;
        this.router.navigateByUrl('todos');
      }
    })
    if (!this._loggedUser) {
      alert('Wrong username or password!');
    }
  }

  logout() {
    this._loggedUser = undefined;
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }
}
