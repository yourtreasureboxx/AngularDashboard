import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Expected",
          data: [44, 55]
        },
        {
          name: "Actual",

          data: [53, 32]
        }
      ],
      chart: {
        type: "bar",
        height: 190,
        width: 330
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        show: true,
        width: 1
      },
      xaxis: {
        categories: ["Earned", "Spend"],
        style: {
          color: "#fff"
        }
      }
    };
  }
}
