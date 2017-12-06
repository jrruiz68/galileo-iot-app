import { Component, ViewChild } from '@angular/core';
import { Nav, MenuController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CardiacSoundsList } from '../pages/cardiac-list/cardiac-list';
import { PulmonicSoundsList } from '../pages/pulmonic-list/pulmonic-list';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public menu: MenuController, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages =[
      { title: 'Inicio', component: HomePage},
      { title: 'Sonidos Cardíacos', component: CardiacSoundsList},
      { title: 'Sonidos Pulmonares', component: PulmonicSoundsList}
    ];
  }
  initializeApp(){
      this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page){
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
