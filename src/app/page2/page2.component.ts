import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../Services/EmployeeService/employee.service";
import {io} from "socket.io-client";
import {Route, Router} from "@angular/router";
import {MenuService} from "../Services/MenuService/menu.service";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  title = "Two"
  reset=true
  resetFalse(){
    this.reset=false
  }

  constructor(public employeeService: EmployeeService,private router:Router,public menuService:MenuService) {
  }

  form = new FormGroup({
    id: new FormControl(this.employeeService.createId(), [Validators.required]),
    name: new FormControl("", [Validators.required]),
    surname: new FormControl("", [Validators.required]),
    wage: new FormControl("", [Validators.required]),
    workArea: new FormControl("", [Validators.required]),
    developFor: new FormControl("", [Validators.required]),
  })

  async addEmployee() {
    const newEmployee = this.form.value
    newEmployee.wage =+ newEmployee.wage
    await this.socket.emit("employeeAdding", newEmployee)
    await this.employeeService.addEmployee(newEmployee)
    this.resetForm()
    alert("Employee Added!")
    this.router.navigate(["page1"])
  }

  resetForm() {
    this.form.reset({id: this.employeeService.createId()})
    this.menuService.changeColor("default")
  }

  socket = io("http://localhost:2000")
  ngOnInit(): void {
    this.menuService.changeColor(this.menuService.menuColor)
  }

}
