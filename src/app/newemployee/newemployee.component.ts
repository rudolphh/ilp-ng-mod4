import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee2 } from './employee2';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

  public empList : Employee2[] = [];

  constructor(private _employeeservice: EmployeeService) { }

  ngOnInit(): void {
    this.empList = this._employeeservice.getEmployees();
  }

}
