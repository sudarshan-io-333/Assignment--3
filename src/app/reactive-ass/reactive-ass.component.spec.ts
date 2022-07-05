import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAssComponent } from './reactive-ass.component';

describe('ReactiveAssComponent', () => {
  let component: ReactiveAssComponent;
  let fixture: ComponentFixture<ReactiveAssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveAssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
