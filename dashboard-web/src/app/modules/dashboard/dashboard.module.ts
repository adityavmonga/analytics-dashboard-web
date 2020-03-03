import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './routing/dashboard-routing.module';
import { ClassicComponent } from './components/classic/classic.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ContainerComponent } from './components/container/container.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassicDirective } from './directives/classic.directive';
import { InsightsComponent } from './components/insights/insights.component';
import { HighchartsChartComponent } from 'highcharts-angular';

import { HttpClientModule } from '@angular/common/http';
import { DashboardApiService } from './services/dashboard-api.service';

@NgModule({
  declarations: [ClassicComponent, ContainerComponent, ClassicDirective, InsightsComponent, HighchartsChartComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DashboardApiService],
  exports: [ClassicComponent],
})
export class DashboardModule{ 
}
