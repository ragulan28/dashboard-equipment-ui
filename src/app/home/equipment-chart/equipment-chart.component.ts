import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-equipment-chart',
  templateUrl: './equipment-chart.component.html',
  styleUrls: ['./equipment-chart.component.css'],
})
export class EquipmentChartComponent implements OnInit, AfterViewInit, OnChanges {


  @Input() chartData;
  private data: any[];

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {

    this.draw();

  }

  draw() {
    if (this.chartData) {
      const chart = c3.generate({
        data: {
          columns: this.chartData,
          type: 'bar'
        }
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.draw();
  }

}
