import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let id = this.navParams.get('submission_id')
    console.log('NavParams',id)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmissionDetailsPage');
  }

}
