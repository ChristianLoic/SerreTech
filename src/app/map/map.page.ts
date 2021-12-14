import { Component, OnInit } from '@angular/core';
import { zones  } from '../zones';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  zones = zones;
  constructor() { }

  ngOnInit() {
  }

}
