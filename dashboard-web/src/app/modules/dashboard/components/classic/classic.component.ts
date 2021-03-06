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
  instChartOptions: any;
  demoChartOptions: any;

  cards = [
    { title: 'Activity', chartOptions: this.activityChartOptions, isDataAvailable: false},
    { title: 'Users', chartOptions: this.userChartOptions, isDataAvailable: false},
    { title: 'Institutes', chartOptions: this.instChartOptions, isDataAvailable: false},
    { title: 'Demographics', chartOptions: this.demoChartOptions, isDataAvailable: false}
  ]
  
  constructor(private apiService: DashboardApiService) {
  }
  
  ngOnInit() { }
  
  ngOnChanges(){
    this.plotActivity();
    this.plotUsers();
    this.plotInst();
    this.plotDemographics();
    // this.isDataAvailable = true;
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
          // pointStart: Date.UTC(2019,11,6),
          pointStart: new Date().setDate((new Date()).getDate() - 95),
          data: resp
        }]
      };
      this.cards[0].chartOptions = this.activityChartOptions;
      this.cards[0].isDataAvailable = true;
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
          // pointStart: Date.UTC(2019,11,6),
          pointStart: new Date().setDate((new Date()).getDate() - 95),
          data: resp
        }]
      }
      this.cards[1].chartOptions = this.userChartOptions;
      this.cards[1].isDataAvailable = true;
      });
  }

  plotInst(){
    this.apiService.getInst(this.eventName).subscribe((resp) => {
      this.instChartOptions = {   
        chart: {
          zoomType: 'x'
        },
        title: {
          text: 'Total Institutes'
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
            text: 'Number of distinct institutes'
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
          name: 'inst',
          pointInterval: 24 * 3600 * 1000,
          // pointStart: Date.UTC(2019,11,6),
          pointStart: new Date().setDate((new Date()).getDate() - 95),
          data: resp
        }]
      }
      this.cards[2].chartOptions = this.instChartOptions;
      this.cards[2].isDataAvailable = true;
    });
  }

  plotDemographics() {
    this.demoChartOptions = {
      chart: {
      type: 'pie'
    },
    title: {
        text: 'Usage by Country'
    },
    subtitle: {
        text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },

    accessibility: {
        announceNewData: {
            enabled: true
        },
        point: {
            valueSuffix: '%'
        }
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: "Countries",
            colorByPoint: true,
        }
      ],
    }

    this.plotCountry();
    // this.plotCity();
  }
  
  plotCountry() {
    this.apiService.getCountry(this.eventName).subscribe((resp) => {
      this.demoChartOptions.series[0].data = resp;
      this.cards[3].chartOptions = this.demoChartOptions;
      this.cards[3].isDataAvailable = true;
    });
  }

  plotCity() {
    this.apiService.getCity(this.eventName).subscribe((resp) => {
      this.demoChartOptions.drilldown = {
        series: resp
      }
    });
  }
}
