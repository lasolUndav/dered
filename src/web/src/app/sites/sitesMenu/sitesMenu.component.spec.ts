import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesMenuComponent } from './site-list-navbar-left.component';

describe('SitesMenuComponent', () => {
  let component: SiteListNavbarLeftComponent;
  let fixture: ComponentFixture<SiteListNavbarLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteListNavbarLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteListNavbarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
