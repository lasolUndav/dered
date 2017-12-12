import { Component, OnInit, Input } from '@angular/core';
import { Sede} from '../../shared/sede.model'

@Component({
  selector: 'app-showcase-espana',
  templateUrl: './home-espana.component.html',
  styleUrls: ['./home-espana.component.scss']
})
export class HomeEspanaComponent implements OnInit {
  @Input() sede: Sede;
  constructor()
  {
  }

  ngOnInit() {
  }
}
