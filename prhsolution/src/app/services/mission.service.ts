import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  baseUrl = 'http://localhost:9093/missions';

  constructor(private http: HttpClient) {
  }

  getAllMissions(): Observable<any>{
    return this.http.get(this.baseUrl + '/gets');
  }

  saveMission(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/create', data);
  }
}
