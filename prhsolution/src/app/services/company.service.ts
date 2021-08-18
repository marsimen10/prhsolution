import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl = 'http://localhost:9093/companies';
  constructor(private http: HttpClient) {

  }
  getAllCompanies(): Observable<any>{
    return this.http.get(this.baseUrl + '/gets');
  }

  saveCompany(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/create', data);
  }

  getCompany(id: any): Observable<any> {
    return this.http.get(this.baseUrl + '/gets/' + id);
  }

}
