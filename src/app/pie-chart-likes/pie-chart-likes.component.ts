import { Component, OnInit } from '@angular/core';
import allAlbum from '../../data.json'

@Component({
  selector: 'app-pie-chart-likes',
  templateUrl: './pie-chart-likes.component.html',
  styleUrls: ['./pie-chart-likes.component.css']
})
export class PieChartLikesComponent implements OnInit {
  chartType = "pie"
  chartData = []
  chartLabels = []

  constructor() { }

  ngOnInit() {
    let dataset = []
    let tagWithLikes = {}

    for (let ids of allAlbum) {

      for (let i = 0; i < ids.tags.length; i++) {
        if (!tagWithLikes[ids.tags[i]]) {
          tagWithLikes[ids.tags[i]] = 0
        }
        tagWithLikes[ids.tags[i]] += ids.likes
      }

    }
    // console.log(tagWithImage)
    this.chartLabels = Object.keys(tagWithLikes)
    for (let tagNumber of Object.keys(tagWithLikes)) {
      dataset.push(tagWithLikes[tagNumber])
    }

    this.chartData.push({
      data: dataset
    })
  }
}
