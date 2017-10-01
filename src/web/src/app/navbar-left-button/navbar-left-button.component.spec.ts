import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLeftButtonComponent } from './navbar-left-button.component';

describe('NavbarLeftButtonComponent', () => {
  let component: NavbarLeftButtonComponent;
  let fixture: ComponentFixture<NavbarLeftButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarLeftButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLeftButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
