import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {HttpModule} from '@angular/http';
import {HTTPService} from "./http.service";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CardiacSoundsList } from '../pages/cardiac-list/cardiac-list';
import { PulmonicSoundsList } from '../pages/pulmonic-list/pulmonic-list';
import { ItemCardiacDetails } from '../pages/item-cardiac-details/item-cardiac-details';
import { ItemPulmonicDetails } from '../pages/item-pulmonic-details/item-pulmonic-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemCardiacDetails,
    ItemPulmonicDetails,
    CardiacSoundsList,
    PulmonicSoundsList
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemCardiacDetails,
    ItemPulmonicDetails,
    CardiacSoundsList,
    PulmonicSoundsList
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTPService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
