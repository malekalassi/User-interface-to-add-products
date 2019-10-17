import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosturunComponent } from './posturun.component';

describe('PosturunComponent', () => {
  let component: PosturunComponent;
  let fixture: ComponentFixture<PosturunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosturunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosturunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
