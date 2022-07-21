import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../Services/EmployeeService/employee.service";
import {io} from "socket.io-client";
import {Employees} from "../employee-datatable/employees";
import {MenuService} from "../Services/MenuService/menu.service";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  title="One"
  constructor(public employeeService:EmployeeService,public menuService:MenuService) { }

socket = io("http://localhost:2000")

  ngOnInit(): void {
    this.socket.on("employeeAdded",data=>this.addEmployeeNow(data))
    this.menuService.changeColor(this.menuService.menuColor)
  }


  private addEmployeeNow(newEmployee:Employees) {
      this.employeeService.employees.unshift(newEmployee)
  }


}
