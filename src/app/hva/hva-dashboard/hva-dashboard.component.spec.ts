import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HvaDashboardComponent } from './hva-dashboard.component';

describe('HvaDashboardComponent', () => {
  let component: HvaDashboardComponent;
  let fixture: ComponentFixture<HvaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HvaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HvaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
