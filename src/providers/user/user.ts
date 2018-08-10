import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppvarProvider } from '../appvar/appvar';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  users:Observable<any[]>
  user:Observable<any>
  constructor(public http: HttpClient,private appvar:AppvarProvider) {
    console.log('Hello UserProvider Provider');
  }
  getUsers(callback){
    this.users = this.http.get<any[]>(this.appvar.server+'getusers')
    this.users.subscribe(
      data => {
        console.log('getusers',data)
        callback(data)
      },
      err => {
        console.log('errgetusers',err)
        callback(err)
      }
    )
  }
  getUser(obj,callback){
    this.user = this.http.post<any>(this.appvar.server+'getuser',obj)
    this.user.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  updatePassword(obj,callback){
    this.user = this.http.post<any>(this.appvar.server+'updatepassword',obj)
    this.user.subscribe(
      data => {
        console.log("updatePassword",data)
        callback(data)
      },
      err => {
        console.log("updatePassword err",err)
        callback(err)
      },
      () => {}
    )
  }
  updateUser(obj,callback){
    this.user = this.http.post<any>(this.appvar.server+'updateuser',obj)
    this.user.subscribe(
      data => {
        console.log("changeLevel",data)
        callback(data)
      },
      err => {
        console.log("changeLevel error",err)
        callback(err)
      }
    )
  }
}
