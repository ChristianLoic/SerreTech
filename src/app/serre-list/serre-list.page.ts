import { Component, OnInit } from '@angular/core';


////MES IMPORTS //
import { serres } from '../serres';

@Component({
  selector: 'app-serre-list',
  templateUrl: './serre-list.page.html',
  styleUrls: ['./serre-list.page.scss'],
})
export class SerreListPage implements OnInit {

  serres = serres;
  constructor() { }

  ngOnInit() {
  }

}
