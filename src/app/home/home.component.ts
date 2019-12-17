import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public operational: any;
  public nOperational: any;

  constructor() {
  }

  ngOnInit() {
    this.operational = {name: 'operational', count: 10};
    this.nOperational = {name: 'Non operational', count: 20};
  }

}
