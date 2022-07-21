import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmployeeService} from "./Services/EmployeeService/employee.service";
import {MenuService} from "./Services/MenuService/menu.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading=false
  title = 'assesment';

  constructor(private employeesService: EmployeeService,private menuService:MenuService) {
  }

  ngOnInit(): void {
    this.employeesService.getEmployee().finally(()=>this.loading=true)
    this.menuService.changeColor(this.menuService.menuColor)
  }

}
