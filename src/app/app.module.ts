import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChartLikesComponent } from './pie-chart-likes/pie-chart-likes.component';
import { PieChartImagesComponent } from './pie-chart-images/pie-chart-images.component';
import { BarChartLikesComponent } from './bar-chart-likes/bar-chart-likes.component';
import { LineChartImagesComponent } from './line-chart-images/line-chart-images.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartLikesComponent,
    PieChartImagesComponent,
    BarChartLikesComponent,
    LineChartImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
