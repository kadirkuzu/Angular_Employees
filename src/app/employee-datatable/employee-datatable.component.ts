import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../Services/EmployeeService/employee.service";

@Component({
  selector: 'app-employee-datatable',
  templateUrl: './employee-datatable.component.html',
  styleUrls: ['./employee-datatable.component.css']
})
export class EmployeeDatatableComponent implements OnInit {
  filterTEXT=""
  constructor(public employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

}
