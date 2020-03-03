import { Component, OnInit, Input } from '@angular/core';
import { DashboardApiService } from '../../services/dashboard-api.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent implements OnInit{
  highcharts = Highcharts;
  productName = 'Classic';
  categories = [
    {title: 'Event Based'},
    {title: 'Overall'},
  ]
  activeCategory = this.categories[0]['title']
  chartData: any;
  dataSource: any;
  isDataAvailable: boolean = false;
  @Input('eventName') eventName: string;
  type: string = 'Column2d';
  activityChartOptions: any;
  userChartOptions: any;
  cards = [
    { title: 'Activity', chartOptions: this.activityChartOptions},
    { title: 'Users', chartOptions: this.userChartOptions},
    { title: 'Institutes', chartOptions: this.activityChartOptions},
    { title: 'Demographics', chartOptions: this.activityChartOptions}
  ]
  
  constructor(private apiService: DashboardApiService) {
  }
  
  ngOnInit() { }
  
  ngOnChanges(){
    this.plotActivity()
    this.isDataAvailable = true;
  };
  
  plotActivity() {
    this.apiService.getActivity(this.eventName).subscribe((resp) => {
    this.activityChartOptions = {   
      chart: {
        zoomType: 'x'
      },
      title: {
        text: 'User Activity'
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
        'Click and drag in the plot area to zoom in' :
        'Pinch the chart to zoom in'
      },
      xAxis:{
        type: 'datetime',
        minRange: 7 * 24 * 3600000 // seven days
      },
      yAxis: {          
         title:{
          text: 'Beacons Fired'
         } 
      },
      legand:{
        enabled: false
      },
      // tooltip: {
      //    valueSuffix:" °C"
      // },
      plotOptions : {
         area: {
            fillColor: {
               linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
               stops: [
                  [0, Highcharts.getOptions().colors[0]],
                  [1, new Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
               ]
            },
            marker: {
               radius: 2
            },
            lineWidth: 1,
            states: {
               hover: {
                  lineWidth: 1
               }
            },
            threshold: null
         }
      },
      series: [{
        type: 'area',
        name: 'user activity',
        pointInterval: 24 * 3600 * 1000,
        pointStart: Date.UTC(2019,11,3),
        data: resp
      }]
    }
    });
  }

  plotUsers(){
    this.apiService.getUsers(this.eventName).subscribe((resp) => {
      this.userChartOptions = {   
        chart: {
          zoomType: 'x'
        },
        title: {
          text: 'Total Users'
        },
        subtitle: {
          text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' :
          'Pinch the chart to zoom in'
        },
        xAxis:{
          type: 'datetime',
          minRange: 7 * 24 * 3600000 // seven days
        },
        yAxis: {          
           title:{
            text: 'Number of distinct users'
           } 
        },
        legand:{
          enabled: false
        },
        // tooltip: {
        //    valueSuffix:" °C"
        // },
        plotOptions : {
           area: {
              fillColor: {
                 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                 stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, new Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                 ]
              },
              marker: {
                 radius: 2
              },
              lineWidth: 1,
              states: {
                 hover: {
                    lineWidth: 1
                 }
              },
              threshold: null
           }
        },
        series: [{
          type: 'area',
          name: 'users',
          pointInterval: 24 * 3600 * 1000,
          pointStart: Date.UTC(2019,11,3),
          data: resp
        }]
      }
      });
  }
}
