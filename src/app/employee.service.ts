import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee2 } from './newemployee/employee2';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl : string = "http://dummy.restapiexample.com/api/v1/employees";

  constructor(private http : HttpClient) { }

  getEmployees() : Observable<any> {
    return this.http.get<any>(this.apiUrl, {observe: 'body'});
  }
}
