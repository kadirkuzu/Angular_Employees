import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employees} from "../../employee-datatable/employees";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(public http:HttpClient) { }
  private baseEmployees:Employees[]=[]
  employees:Employees[]=[]

  async getEmployee(){
    let employeeget = await this.http.get("http://localhost:3000/employees").toPromise()
    if (employeeget) this.baseEmployees=employeeget as Employees[]
    this.employees=this.baseEmployees
  }

  async addEmployee(employee:Employees){
    const res= await this.http.post("http://localhost:3000/employees", employee).toPromise()
    if (!res) return
    await this.getEmployee()
  }

  createId(){
    let newId=0
    for(let employe of this.employees) {
      if (newId < employe.id) newId = employe.id
    }
    return newId+1
  }

  sortByName(){
    this.employees = this.employees.sort((a: Employees, b: Employees) => ((a.name).localeCompare(b.name)))
  }

  sortByDevelopFor(){
    this.employees = this.employees.sort((a: Employees, b: Employees) => ((a.developFor).localeCompare(b.developFor)))
  }

  findHowManyEmployee(){
    return this.baseEmployees.length
  }

  findHowManyWorkArea(workArea:any){
    const res = this.baseEmployees.filter((employee:Employees)=>employee.workArea==workArea)
    return res.length
  }
}
