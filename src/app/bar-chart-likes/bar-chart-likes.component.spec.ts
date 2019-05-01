import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartLikesComponent } from './bar-chart-likes.component';

describe('BarChartLikesComponent', () => {
  let component: BarChartLikesComponent;
  let fixture: ComponentFixture<BarChartLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
