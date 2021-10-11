import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

//REST CLIENT CODE

@Injectable({ //it can be injected in various components
  providedIn: 'root'
})
export class EmployeeService {

  private Url: string = 'http://localhost:8080/api/v1/employees'

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.Url}`);

  }
  addEmployee(employee: Employee): Observable<object> {
    return this.httpClient.post(`${this.Url}`, employee);
  }
  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.Url}/${id}`);

  }
  updateEmployee(id: number, employee: Employee): Observable<object> {
    return this.httpClient.put(`${this.Url}/${id}`, employee)
  }
}
