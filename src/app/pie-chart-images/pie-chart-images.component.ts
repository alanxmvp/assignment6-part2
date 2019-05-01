import { Component, OnInit } from '@angular/core';
import allAlbum from '../../data.json'

@Component({
  selector: 'app-pie-chart-images',
  templateUrl: './pie-chart-images.component.html',
  styleUrls: ['./pie-chart-images.component.css']
})
export class PieChartImagesComponent implements OnInit {
  chartType = "pie"
  chartData = []
  chartLabels = []

  constructor() { }

  ngOnInit() {
    let dataset = []
    let tagWithImage = {}

    for (let ids of allAlbum) {

      for (let i = 0; i < ids.tags.length; i++) {
        if (!tagWithImage[ids.tags[i]]) {
          tagWithImage[ids.tags[i]] = 0
        }
        tagWithImage[ids.tags[i]] += 1
      }

    }
    // console.log(tagWithImage)
    this.chartLabels = Object.keys(tagWithImage)
    for (let tagNumber of Object.keys(tagWithImage)) {
      dataset.push(tagWithImage[tagNumber])
    }

    this.chartData.push({
      data: dataset
    })
  }
}