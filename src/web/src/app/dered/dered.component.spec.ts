import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeredComponent } from './dered.component';

describe('DeredComponent', () => {
  let component: DeredComponent;
  let fixture: ComponentFixture<DeredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
