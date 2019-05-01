import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartLikesComponent } from './pie-chart-likes.component';

describe('PieChartLikesComponent', () => {
  let component: PieChartLikesComponent;
  let fixture: ComponentFixture<PieChartLikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartLikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
