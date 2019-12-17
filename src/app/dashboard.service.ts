import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Data} from './mode';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>('http://ivivaanywhere.ivivacloud.com/api/Asset/Asset/All?apikey=SC:ivivademo:8d756202d6159375&max=10&last=0');
  }
}
