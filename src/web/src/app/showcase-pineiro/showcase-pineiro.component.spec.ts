import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcasePineiroComponent } from './showcase-pineiro.component';

describe('ShowcasePineiroComponent', () => {
  let component: ShowcasePineiroComponent;
  let fixture: ComponentFixture<ShowcasePineiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcasePineiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcasePineiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
