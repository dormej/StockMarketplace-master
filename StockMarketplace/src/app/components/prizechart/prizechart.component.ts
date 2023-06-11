import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartOptions, TooltipItem } from 'chart.js';
import { LinearScale, Title, Tooltip, CategoryScale, LineController } from 'chart.js';
Chart.register(LinearScale, Title, Tooltip, CategoryScale, LineController);

@Component({
  selector: 'app-prizechart',
  templateUrl: './prizechart.component.html',
  styleUrls: ['./prizechart.component.scss']
})
export class PrizeChartComponent implements AfterViewInit {
  @ViewChild('prizeChartCanvas', { static: true }) prizeChartCanvas!: ElementRef<HTMLCanvasElement>;

  private prizeChart!: Chart;

  ngAfterViewInit() {
    this.createPrizeChart();
  }

  createPrizeChart() {
    const canvas = this.prizeChartCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Symulowane dane dla wykresu
    const data = {
      labels: ['00:00', '00:05', '00:10', '00:15', '00:20'],
      datasets: [
        {
          label: 'Cena złota',
          data: [1500, 1520, 1515, 1525, 1510],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    };

    // Opcje dla wykresu
    const options: ChartOptions<'line'> = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (tooltipItem: TooltipItem<'line'>) {
              return tooltipItem.formattedValue ?? '';
            }
          }
        }
      }
    };

    // Inicjalizacja wykresu
    this.prizeChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });
  }
}