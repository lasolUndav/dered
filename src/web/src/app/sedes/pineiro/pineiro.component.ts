import { Component, OnInit } from '@angular/core';
import { SedeService } from '../shared/sede.service'
import { Sede} from '../shared/sede.model'

@Component({
  selector: 'app-pineiro',
  templateUrl: './pineiro.component.html',
  styleUrls: ['./pineiro.component.css']
})
export class PineiroComponent implements OnInit {

  sedeService: SedeService;
  sede: Sede;
  constructor(sedeService: SedeService)
  {
    this.sedeService = sedeService;
  }

  ngOnInit() {
    this.sedeService.getPineiro().subscribe(sede=> {
      this.sede = sede;
    });
  }
}
