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
  public operational = {name: 'operational', count: 0};
  public nOperational = {name: 'Non Operational', count: 0};
  private intervalID: any;
  @ViewChild('equipmentChartComponent', {static: false}) child: EquipmentChartComponent;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.getData();
    this.intervalID = setInterval(() => {
      this.getData();
    }, 5000);

  }

  private getData() {
    this.dashboardService.getData().subscribe(res => {
      this.data = res;
      this.operational.count = this.data.filter(d => d.OperationalStatus === 'Operational').length;
      this.nOperational.count = this.data.filter(d => d.OperationalStatus !== 'Operational').length;
      console.log([this.operational, this.nOperational]);
      this.child.draw();
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalID);
  }

}
