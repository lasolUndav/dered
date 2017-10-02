import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteListNavbarTopComponent } from './site-list-navbar-top.component';

describe('SiteListNavbarTopComponent', () => {
  let component: SiteListNavbarTopComponent;
  let fixture: ComponentFixture<SiteListNavbarTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteListNavbarTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteListNavbarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
