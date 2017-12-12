import { Component, OnInit } from '@angular/core';
import { SedeService } from '../../shared/sede.service'
import { Sede} from '../../shared/sede.model'

@Component({
  selector: 'app-showcase-pineiro',
  templateUrl: './home-pineiro.component.html',
  styleUrls: ['./home-pineiro.component.scss']
})
export class HomePineiroComponent implements OnInit {
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
