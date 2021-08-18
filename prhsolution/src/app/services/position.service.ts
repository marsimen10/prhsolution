import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  baseUrl = 'http://localhost:9093/positions';

  constructor(private http: HttpClient) {
  }

  getAllPositions(): Observable<any>{
    return this.http.get(this.baseUrl + '/gets');
  }

  savePositions(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/create', data);
  }

}
