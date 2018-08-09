import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  users = []
  text: string;

  constructor(public navCtrl: NavController,private user:UserProvider) {
    console.log('Hello UsersComponent Component');
    this.text = 'Hello World';
    this.user.getUsers(result => {
      this.users = result
    })
  }


}
