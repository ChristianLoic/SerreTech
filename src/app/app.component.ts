import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import 'tailwindcss/tailwind.css';

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
      title: 'login',
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
      url: '/serres',
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

  GoWiki() {
    window.location.href='https://wiki.pcst.xyz';
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
