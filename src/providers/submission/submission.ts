import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { AppvarProvider } from './../appvar/appvar'
/*
  Generated class for the SubmissionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SubmissionProvider {
  obj : Observable<any>
  objs : Observable<any[]>
  constructor(public http: HttpClient,private appvar:AppvarProvider) {
    console.log('Hello SubmissionProvider Provider');
  }
  getSubmissions(callback){
    console.log('Server',this.appvar.server)
    this.obj = this.http.get(this.appvar.server+'getsubmissionpage/1/1/10')
    this.obj.subscribe(
      data => {
        console.log('Data',data)
        callback(data)
      },
      err => {
        console.log('Err',err)
        callback(err)
      }
    )
  }
  getSubmissionDetails(submission,callback){
    this.objs = this.http.get<any[]>(this.appvar.server+'getsubmissiondetailpage/'+submission.submission_id+'/0/10')
    this.objs.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
  setStatus(obj,callback){
    this.obj = this.http.get(this.appvar.server+'setsubmissiondetailstatus/'+obj.id+'/'+obj.status)
    this.obj.subscribe(
      data => {
        callback(data)
      },
      err => {
        callback(err)
      }
    )
  }
}
