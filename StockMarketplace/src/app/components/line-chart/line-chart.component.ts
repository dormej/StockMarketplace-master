import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
function generateTimes(): string[] {
  const times: string[] = [];

  for (let hour = 0; hour < 24; hour++) {
    const hourStr = hour.toString().padStart(2, '0');
    for (let minute = 0; minute < 60; minute += 10) {
      const minuteStr = minute.toString().padStart(2, '0');
      const time = `${hourStr}:${minuteStr}`;
      times.push(time);
    }
  }

  return times;
}
function generateRandomPrices(timeslengh:number): number[] {
  const prices: number[] = [];
  const minPrice = 4.950;
  const maxPrice = 5.010;

  for (let i = 0; i < timeslengh; i++) {
    const randomPrice = Math.random() * (maxPrice - minPrice) + minPrice;
    prices.push(randomPrice);
  }

  return prices;
}

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
   times=generateTimes()
   prices=generateRandomPrices(this.times.length)
   constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  public chart: any;

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.times,
	       datasets: [
          {
            label: "Forex",
            data:this.prices,
            backgroundColor: 'blue',
            borderColor: 'red',
            
            borderWidth: 2.5
          },
          
        ]
      },
     options: {
      aspectRatio: 2.5,
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            color: 'green' // Zmiana koloru tekstu osi Y na zielony
          }
        },
        x: {
          ticks: {
            color: 'blue' // Zmiana koloru tekstu osi X na pomarańczowy
          }
        }
      },
      plugins: {
       
      }
    }
  });
  }

 


  
} 