import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartImagesComponent } from './line-chart-images.component';

describe('LineChartImagesComponent', () => {
  let component: LineChartImagesComponent;
  let fixture: ComponentFixture<LineChartImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
