import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as c3 from 'c3';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data: any;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.data = this.dashboardService.getData();
  }

}
