import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserChangeLevelPage } from './user-change-level';

@NgModule({
  declarations: [
    UserChangeLevelPage,
  ],
  imports: [
    IonicPageModule.forChild(UserChangeLevelPage),
  ],
})
export class UserChangeLevelPageModule {}
