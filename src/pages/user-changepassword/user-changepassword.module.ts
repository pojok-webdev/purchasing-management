import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserChangepasswordPage } from './user-changepassword';

@NgModule({
  declarations: [
    UserChangepasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(UserChangepasswordPage),
  ],
})
export class UserChangepasswordPageModule {}
