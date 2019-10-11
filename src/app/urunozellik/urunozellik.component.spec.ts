import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunozellikComponent } from './urunozellik.component';

describe('UrunozellikComponent', () => {
  let component: UrunozellikComponent;
  let fixture: ComponentFixture<UrunozellikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrunozellikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunozellikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
