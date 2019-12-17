import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() {
  }

  getData() {
    return {
      operational: {name: 'operational', count: 10},
      nOperational: {name: 'Non operational', count: 20}
    };
  }
}
