import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


import { Sensor , sensors } from '../sensors';


@Component({
  selector: 'app-sensor-details',
  templateUrl: './sensor-details.page.html',
  styleUrls: ['./sensor-details.page.scss'],
})
export class SensorDetailsPage implements OnInit {

  sensor: Sensor | undefined;

  constructor(private route: ActivatedRoute , private http: HttpClient) { }

  ngOnInit()
  {
    const routeParams = this.route.snapshot.paramMap;
    const sensorIdFromRoute = Number(routeParams.get('idSensor'));

    // Find the sensor that correspond with the id provided in route.
    this.sensor = sensors.find(sensor => sensor.idSensor === sensorIdFromRoute);


  }



}
