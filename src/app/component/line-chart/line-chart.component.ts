import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip
} from "ng-apexcharts";
import { dataSeries } from "./data-series";


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {
  public series!: ApexAxisChartSeries;
  public chart!: ApexChart;
  public dataLabels!: ApexDataLabels;
  public markers!: ApexMarkers;
  public title!: ApexTitleSubtitle;
  public fill!: ApexFill;
  public yaxis!: ApexYAxis;
  public xaxis!: ApexXAxis;
  public tooltip!: ApexTooltip;

  constructor() {
    this.initChartData();
  }

  public initChartData(): void {
    let ts2 = 4;
    let dates = [];
    for (let i = 0; i <20; i++) {
      ts2 = ts2 + 2;
      dates.push([ts2, dataSeries[1][i].value]);
    }

    this.series = [
      {
        name: "My Earnings",
        data: dates
      }
    ];
    this.chart = {
      type: "area",
      stacked: false,
      height: 300,
      width: 400,
      toolbar: {
        autoSelected: "zoom"
      }
    };
    this.dataLabels = {
      enabled: false
    };
    this.markers = {
      size: 0
    };
    this.title = {
      text: "Earnings",
      align: "left",
      style: {
        fontWeight : 0,
        fontSize : "18",
        color:"#d3d3d3"
      }
    };
    this.fill = {
      type: "gradient"
    };
    this.yaxis = {
      labels: {
        formatter: function(val) {
          return (val / 1000000).toFixed(0);
        }
      },
      title: {
        text: "Price",
        style: {
          color: "#d3d3d3",
          fontSize : "14",
          fontWeight: 0
        }
      }
    };
    this.xaxis = {
      type: "datetime"
    };
    this.tooltip = {
      shared: false,
      y: {
        formatter: function(val) {
          return (val / 1000000).toFixed(0);
        }
      }
    };
  }
}

