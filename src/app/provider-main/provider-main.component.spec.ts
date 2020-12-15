import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderMainComponent } from './provider-main.component';

describe('ProviderMainComponent', () => {
  let component: ProviderMainComponent;
  let fixture: ComponentFixture<ProviderMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
