import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time/time.component';
import { TestRoutingModule } from './test-routing.module'
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartComponent } from 'highcharts-angular';

// import { FusionChartsModule } from 'angular-fusioncharts';

// // Load FusionCharts
// import * as FusionCharts from 'fusioncharts';
// // Load Charts module
// import * as Charts from 'fusioncharts/fusioncharts.charts';
// // Load themes
// import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// // Add dependencies to FusionChartsModule
// FusionChartsModule.fcRoot(
//   FusionCharts,
//   Charts,
//   FusionTheme
// )


@NgModule({
  declarations: [TimeComponent, HighchartsChartComponent],
  imports: [
    CommonModule,
    // FusionChartsModule,
    TestRoutingModule
  ],
  // entryComponents: [TimeComponent]
})
export class TestModule { }
