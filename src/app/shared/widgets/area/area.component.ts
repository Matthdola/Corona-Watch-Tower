import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  @Input() data;
  chartOptions = {};

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Recapitulatif Covid 19'
      },
      subtitle: {
        text: 'Situation Covid19'
      },
      /*
      xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickmarkPlacement: 'on',
        title: {
          enabled: false
        }
      },
      yAxis: {
        title: {
          text: 'Billions'
        },
        labels: {
          formatter: function() {
            return this.value / 1000;
          }
        }
      },
      */
      tooltip: {
        split: true,
        valueSuffix: 'millions'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      series: this.data
    };

    HC_exporting(Highcharts);
  }
}
