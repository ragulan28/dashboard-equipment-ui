import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as c3 from 'c3';
import {DashboardService} from '../dashboard.service';
import {Data} from '../mode';
import {EquipmentChartComponent} from './equipment-chart/equipment-chart.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit, OnDestroy {
  public data: Data[];
  public operational = {name: 'operational', count: 10};
  public nOperational = {name: 'Non Operational', count: 10};
  private intervalID: any;


  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.intervalID = setInterval(() => {
      this.getData();
    }, 1000);

  }

  private getData() {
    this.dashboardService.getData().subscribe(res => {
      console.log(res);
      this.data = res;
      this.operational.count = this.data.filter(d => d.OperationalStatus === 'Operational').length;
      this.nOperational.count = this.data.filter(d => d.OperationalStatus !== 'Operational').length;
      console.log([this.operational, this.nOperational]);
      // this.child.drow();
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalID);
  }

}
