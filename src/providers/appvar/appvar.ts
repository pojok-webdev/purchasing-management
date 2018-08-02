import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AppvarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppvarProvider {
  server:String='http://delima.padinet.com:2018/'

  constructor(public http: HttpClient) {
    console.log('Hello AppvarProvider Provider');
  }
}
