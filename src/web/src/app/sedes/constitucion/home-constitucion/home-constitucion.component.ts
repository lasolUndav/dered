import { Component, OnInit, Input } from '@angular/core';
import { Sede} from '../../shared/sede.model'

@Component({
  selector: 'app-showcase-constitucion',
  templateUrl: './home-constitucion.component.html',
  styleUrls: ['./home-constitucion.component.scss']
})
export class HomeConstitucionComponent implements OnInit {

  @Input() sede: Sede;
  constructor()
  {
  }

  ngOnInit() {
  }
}
