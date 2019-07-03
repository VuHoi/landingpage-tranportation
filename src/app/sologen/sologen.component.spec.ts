import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SologenComponent } from './sologen.component';

describe('SologenComponent', () => {
  let component: SologenComponent;
  let fixture: ComponentFixture<SologenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SologenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SologenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
