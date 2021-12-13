import { Component, OnInit } from '@angular/core';
import { sensors } from '../sensors';

@Component({
  selector: 'app-all-sensor',
  templateUrl: './all-sensor.page.html',
  styleUrls: ['./all-sensor.page.scss'],
})
export class AllSensorPage implements OnInit {


  sensors = sensors;

  constructor() { }




  ngOnInit() {


  }

}
