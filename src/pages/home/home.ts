import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SubmissionProvider } from '../../providers/submission/submission';
import { SubmissionDetailsPage } from '../../pages/submission-details/submission-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  submissionDS
  constructor(public navCtrl: NavController,private submission:SubmissionProvider,private nav:NavController) {
    console.log('Home Cons Invoked')
    this.submission.getSubmissions(result => {
      this.submissionDS = result
      console.log('Result',result)
    })
  }
  doShowDetails(item){
    console.log(item)
    this.nav.push(SubmissionDetailsPage,{
      submission_id:1
    })
  }
}
