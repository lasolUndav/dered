import { Component, OnInit, Input } from '@angular/core';
import { Sede} from '../../shared/sede.model'

@Component({
  selector: 'app-showcase-escuela',
  templateUrl: './home-escuela.component.html',
  styleUrls: ['./home-escuela.component.scss']
})
export class HomeEscuelaComponent implements OnInit {
  @Input() sede: Sede;
  constructor()
  {
  }

  ngOnInit() {
  }
}
