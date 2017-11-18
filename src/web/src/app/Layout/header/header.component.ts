import { Component, OnInit } from '@angular/core';
import {SedesMenuComponent} from '../../Sedes/shared/sedesMenu/sedesMenu.component'
import {SedeService} from '../../Sedes/shared/sede.service'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
