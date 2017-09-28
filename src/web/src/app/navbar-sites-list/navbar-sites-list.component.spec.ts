import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSitesListComponent } from './navbar-sites-list.component';

describe('NavbarSitesListComponent', () => {
  let component: NavbarSitesListComponent;
  let fixture: ComponentFixture<NavbarSitesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarSitesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSitesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
