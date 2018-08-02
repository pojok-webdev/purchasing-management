import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubmissionDetailsPage } from './submission-details';

@NgModule({
  declarations: [
    SubmissionDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SubmissionDetailsPage),
  ],
})
export class SubmissionDetailsPageModule {}
