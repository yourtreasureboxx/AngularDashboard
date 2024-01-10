import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ChartComponent,
  ApexPlotOptions,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrl: './circle-chart.component.scss'
})
export class CircleChartComponent implements OnInit{
  @Input() input!: number
  @Input() circleSize: number = 120
  public series!: ApexNonAxisChartSeries;
  public chart!: ApexChart;
  public labels!: string[];
  public plotOptions!: ApexPlotOptions

  constructor() {
    
  }
  ngOnInit(): void {
    this.initChartData();
  }

  initChartData() {
    this.series = [this.input],
      this.chart= {
        height: this.circleSize,
        type: "radialBar"
      }
      this.plotOptions= {
        radialBar: {
          dataLabels: {
            name: {
            },
            value: {
              fontSize: "0px",
              color: "#d3d3d3"            
            },
            total: {
              show: true,
              label: "₹",
              color: "#d3d3d3",
              fontSize: "25px"
            }
          },  
          startAngle: -105,
          endAngle: 255,
          hollow: {
            size: "60%",
          }
        }
      }
  }

}
