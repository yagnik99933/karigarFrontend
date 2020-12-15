import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcurrentstatusComponent } from './showcurrentstatus.component';

describe('ShowcurrentstatusComponent', () => {
  let component: ShowcurrentstatusComponent;
  let fixture: ComponentFixture<ShowcurrentstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcurrentstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcurrentstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
