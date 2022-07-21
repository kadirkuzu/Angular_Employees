import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page1Component} from "./page1/page1.component";
import {Page2Component} from "./page2/page2.component";
import {EmployeeDatatableComponent} from "./employee-datatable/employee-datatable.component";

const routes: Routes = [
  {path:'page1',component:Page1Component},
  {path:"page2",component:Page2Component},
  {path:"",component:Page1Component},
  {path:"datatable",component:EmployeeDatatableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
