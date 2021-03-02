import { Injectable } from '@angular/core';
import { Employee2 } from './newemployee/employee2';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() : Employee2[] {
    return [
      {
        id: 1,
        employee_name: "Rudy",
        employee_salary: 70000.00,
        employee_age: 38,
        profile_image: "https://media-exp1.licdn.com/dms/image/C5603AQHoRAlsmbcXZw/profile-displayphoto-shrink_800_800/0/1607104110874?e=1620259200&v=beta&t=-rF249uLh8vIJ9iQ5RbevioP0NpJhhsLqRUXgo-V52g"
      }

    ];
  }
}
