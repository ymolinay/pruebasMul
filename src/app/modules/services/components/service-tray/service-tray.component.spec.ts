import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTrayComponent } from './service-tray.component';

describe('ServiceTrayComponent', () => {
  let component: ServiceTrayComponent;
  let fixture: ComponentFixture<ServiceTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
