import {AfterViewInit, Component, Input, OnChanges, OnInit} from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-equipment-chart',
  templateUrl: './equipment-chart.component.html',
  styleUrls: ['./equipment-chart.component.css'],
})
export class EquipmentChartComponent implements OnInit, OnChanges, AfterViewInit {


  @Input() operational;
  @Input() nOperational;

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.drow();
  }

  drow() {
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

  ngOnChanges(): void {
    console.log("changed")
    // this.drow();
  }
}
