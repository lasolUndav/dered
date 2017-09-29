import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PineiroComponent } from './pineiro.component';

describe('PineiroComponent', () => {
  let component: PineiroComponent;
  let fixture: ComponentFixture<PineiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PineiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PineiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
