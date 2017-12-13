import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dered-animalesPoder',
  templateUrl: './animalesPoder.component.html',
  styleUrls: ['./animalesPoder.component.css']
})
export class AnimalesPoderComponent implements OnInit {
  constructor()
  {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
