import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the UserChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-changepassword',
  templateUrl: 'user-changepassword.html',
})
export class UserChangepasswordPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  private viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserChangepasswordPage');
  }
  closeModal(){
    this.viewCtrl.dismiss()
  }

}
