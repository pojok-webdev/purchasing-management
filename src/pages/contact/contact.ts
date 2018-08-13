import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { UserChangepasswordPage } from '../user-changepassword/user-changepassword';
import { UserChangeLevelPage } from '../user-change-level/user-change-level';

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
  showActionModal(event,_user){
    console.log("ShowChangePasswordModal invoked",event)
    switch(event){
      case 'changePassword':
        let changePasswordModal = this.modalCtrl.create(UserChangepasswordPage,{email:_user.email})
        changePasswordModal.present()
      break;
      case 'detail':
      break;
      case 'changeLevel':
        console.log('change level invoked')
        let changeLevelModal = this.modalCtrl.create(UserChangeLevelPage,{id:_user.id})
        changeLevelModal.present() 
      break;
      case 'remove':
      break;
    }
  }

}
