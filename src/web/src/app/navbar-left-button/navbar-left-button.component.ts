import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar-left-button',
  templateUrl: './navbar-left-button.component.html',
  styleUrls: ['./navbar-left-button.component.css']
})
export class NavbarLeftButtonComponent implements OnInit {

  @Input('is-clicked') isClicked: boolean;
  @Output('change') click = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isClicked = !this.isClicked;
    this.click.emit(this.isClicked);
  }

}
