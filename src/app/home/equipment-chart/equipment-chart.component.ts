import {AfterViewInit, Component, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-equipment-chart',
  templateUrl: './equipment-chart.component.html',
  styleUrls: ['./equipment-chart.component.css'],
})
export class EquipmentChartComponent implements OnInit, AfterViewInit, OnChanges {


  @Input() operational;
  @Input() nOperational;

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.draw();
  }

  draw() {
    console.log(this.operational.count);
    if (this.operational.count && this.nOperational.count) {
      const chart = c3.generate({
        data: {
          columns: [
            [this.operational.name, this.operational.count],
            [this.nOperational.name, this.nOperational.count],
          ],
          type: 'bar'
        }
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.draw();
  }

}
