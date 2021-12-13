import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Serre, serres } from '../serres';
import { Sensor, sensors } from '../sensors';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.page.html',
  styleUrls: ['./sensor-list.page.scss'],
})
export class SensorListPage implements OnInit {


  @Input() sensor!: Sensor | undefined;
  sensors = sensors;
  serres = serres;
  serre : Serre | undefined;
  Ages: {  value : number ,name: string , img :string}[];


  constructor(private route: ActivatedRoute) { }

  ngOnInit()
{
          // First get the serre id from the current route.
          const routeParams = this.route.snapshot.paramMap;
          const serreIdFromRoute = Number(routeParams.get('idSerre'));

          // Find the product that correspond with the id provided in route.
          this.serre = serres.find(serre => serre.idSerre === serreIdFromRoute);

            this.Ages = [
                              {
                                value: this.serre.luminosite,
                                name: 'luminosite',
                                img :'soleil.png'
                              },
                              {
                                value: this.serre.temperature,
                                name: 'temperature',
                                img :'thermometre.png'
                              },
                              {
                                value: this.serre.humiditeSol,
                                name: 'humiditeSol',
                                img :'goutte.png'
                              },
                              {
                                value: this.serre.humiditeAir,
                                name: 'humiditeAir',
                                img :'goutte.png'
                              },

                         ];
  }

}
