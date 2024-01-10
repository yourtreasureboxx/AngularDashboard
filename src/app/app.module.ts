import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { PieChartComponent } from './component/pie-chart/pie-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { LineChartComponent } from './component/line-chart/line-chart.component';
import { BarChartComponent } from './component/bar-chart/bar-chart.component';
import { CircleChartComponent } from './component/circle-chart/circle-chart.component';
import {MatCardModule} from '@angular/material/card';
import { GoalsChartComponent } from './component/goals-chart/goals-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    LineChartComponent,
    BarChartComponent,
    CircleChartComponent,
    GoalsChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    NgApexchartsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
