import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SubmissionProvider } from '../providers/submission/submission';
import { AppvarProvider } from '../providers/appvar/appvar';
import { HttpClientModule } from '@angular/common/http';
import { SubmissionDetailsPage } from '../pages/submission-details/submission-details';
import { UserChangepasswordPage } from '../pages/user-changepassword/user-changepassword';
import { UserProvider } from '../providers/user/user';
import { UserChangeLevelPage } from '../pages/user-change-level/user-change-level';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SubmissionDetailsPage,
    UserChangepasswordPage,
    UserChangeLevelPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SubmissionDetailsPage,
    UserChangepasswordPage,
    UserChangeLevelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SubmissionProvider,
    AppvarProvider,
    UserProvider
  ]
})
export class AppModule {}
