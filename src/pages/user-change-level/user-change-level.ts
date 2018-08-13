import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the UserChangeLevelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-change-level',
  templateUrl: 'user-change-level.html',
})
export class UserChangeLevelPage {
  obj = {
    email:'',
    image:'',
    level:'',
    active:''
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private user:UserProvider,
    private viewCtrl: ViewController
  ) {
    this.user.getUser({id:this.navParams.get('id')},result => {
      console.log('user fetched',result)
      this.obj = result[0]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserChangeLevelPage');
  }
  updateLevel(){
    console.log("updatelevel invoked")
    this.user.updateUser(this.obj,result => {
      console.log("User updated",result)
      this.viewCtrl.dismiss()
    })
  }
  closeModal(){
    this.viewCtrl.dismiss()
  }
}
