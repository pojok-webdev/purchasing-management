import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

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
obj = {
  password:'',
  newpassword:''
}
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl:ViewController,
    private user:UserProvider
  ) {
    console.log("NavParams",this.navParams.get('email'))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserChangepasswordPage');
  }
  closeModal(){
    this.viewCtrl.dismiss()
  }
  updatePassword(){
    this.user.updatePassword({
      email:this.navParams.get('email'),
      newpassword:this.obj.newpassword
    },result=>{
      console.log("UPdate password success",result)
    })
    this.viewCtrl.dismiss()
  }
}
