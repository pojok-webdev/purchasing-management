import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { UserChangepasswordPage } from '../user-changepassword/user-changepassword';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  users = []
  text: string;

  constructor(
    public navCtrl: NavController,
    private user:UserProvider,
    private modalCtrl: ModalController
  ) {
    console.log('Hello UsersComponent Component');
    this.text = 'Hello World';
    this.user.getUsers(result => {
      this.users = result
    })
  }
  showActionModal(event){
    console.log("ShowChangePasswordModal invoked",event)
    switch(event){
      case 'changePassword':
      let modal = this.modalCtrl.create(UserChangepasswordPage,{})
      modal.present()
      break;
      case 'detail':
      break;
      case 'remove':
      break;
    }
  }

}
