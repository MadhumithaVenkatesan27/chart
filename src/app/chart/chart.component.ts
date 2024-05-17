import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartModule } from 'angular-highcharts';


@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'] // Corrected from styleUrl to styleUrls
})
export class ChartComponent {
  title = 'chart';

  barChart = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Number of Developers by Language'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['JavaScript', 'Python', 'Java', 'C#', 'Others']
    },
    
    yAxis: {
      title: {
        text: 'Number of Developers'
      }
    },
    series: [
      {
        name: 'Number of Developers',
        data: [45, 25, 15, 10, 5],
        color: '#306998'
      } as any
    ]
  });
  
  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Developers'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [
      {
        name: 'Software Developers',
        data: [100, 120, 130, 150, 140, 160, 170, 190, 180, 200, 210, 220]
      } as any
    ]
  });

  pieChart = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },
    credits: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Developers',
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        type: 'pie',
        data: [
          { name: 'JavaScript', y: 45, color: '#f0db4f' },
          { name: 'Python', y: 25, color: '#808080' },
          { name: 'Java', y: 15, color: '#007396'},
          { name: 'C#', y: 10, color: '#68217a'},
          { name: 'Others', y: 5, color: '#A0C3D2'},
        ],
      },
    ]

  });
}
