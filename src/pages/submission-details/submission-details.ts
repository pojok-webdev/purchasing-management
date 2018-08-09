import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubmissionProvider } from '../../providers/submission/submission';

/**
 * Generated class for the SubmissionDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-submission-details',
  templateUrl: 'submission-details.html',
})
export class SubmissionDetailsPage {
  submission_details
  constructor(public navCtrl: NavController, public navParams: NavParams,private submission: SubmissionProvider) {
    let id = this.navParams.get('submission_id')
    console.log('NavParams',id)
    this.submission.getSubmissionDetails({submission_id:id},result => {
      this.submission_details = result
      console.log("Resut",result)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmissionDetailsPage');
  }

}
