import { Component,ViewChild} from '@angular/core';
import { Chart,registerables } from 'chart.js';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild('graph') graph;
  bars: any;
  colorArray: any;
  ionViewDidEnter() {
    this.createBarChart();
  }

  constructor() {Chart.register(...registerables);} createBarChart() {
    this.bars = new Chart(this.graph.nativeElement, {
      type: 'line',
      data: {
        labels: ['Control 1', 'Control 2', 'Control 3', 'control 4'],
        datasets: [{
          label: 'SINI',
          data: [10,15,18,20],
          backgroundColor: 'white', 
          borderColor: 'red',
          borderWidth: 1,
          },{
          label: 'moyenne classe',
          data: [8,11,19,15],
          backgroundColor: 'white', 
          borderColor: 'black',
          borderWidth: 1,
          }]
      },
          });
  }


}
