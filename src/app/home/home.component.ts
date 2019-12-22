import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
  public chartData: any[];
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
      this.count();
      console.log(this.chartData);
      this.child.draw();
    });
  }

  private count() {
    this.chartData = [];
    const tempChartData = this.data.reduce((acc, o) => (acc[o.AssetCategoryID] = (acc[o.AssetCategoryID] || 0) + 1, acc), {});
    Object.keys(tempChartData).forEach(key => {
      this.chartData.push([key, tempChartData[key]]);
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalID);
  }

}
