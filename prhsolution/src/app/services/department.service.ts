import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseUrl = 'http://localhost:9093/departments';
  constructor(private http: HttpClient) {

  }
  getAllDepartments(): Observable<any>{
    return this.http.get(this.baseUrl + '/gets');
  }

  saveDepartment(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/create', data);
  }


}
