import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import "tailwindcss/tailwind.css";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  activePageTitle = 'home';

  Pages = [
    {
      title: 'home',
      url: '',
      icon: 'home'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'person'
    },
    {
      title: 'all-sensor',
      url: '/all-sensor',
      icon: 'grid'
    },
    {
      title: 'serre-list',
      url: '/serre-list',
      icon: 'list'
    },
    {
      title: 'map',
      url: '/map',
      icon: 'map'
    }
  ];

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
