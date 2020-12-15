import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantSolutionComponent } from './instant-solution.component';

describe('InstantSolutionComponent', () => {
  let component: InstantSolutionComponent;
  let fixture: ComponentFixture<InstantSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
