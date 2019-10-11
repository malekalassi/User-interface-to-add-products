import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrundetailComponent } from './urundetail.component';

describe('UrundetailComponent', () => {
  let component: UrundetailComponent;
  let fixture: ComponentFixture<UrundetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrundetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrundetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
