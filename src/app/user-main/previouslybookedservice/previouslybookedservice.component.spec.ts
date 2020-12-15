import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviouslybookedserviceComponent } from './previouslybookedservice.component';

describe('PreviouslybookedserviceComponent', () => {
  let component: PreviouslybookedserviceComponent;
  let fixture: ComponentFixture<PreviouslybookedserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviouslybookedserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviouslybookedserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
