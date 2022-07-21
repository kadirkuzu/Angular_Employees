import {Pipe, PipeTransform} from '@angular/core';
import {Employees} from "./employees";

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(list: Employees[], filterText?: string): Employees[] {
    if (!filterText) return list
    filterText = filterText.toLowerCase()
    return list.filter((employee: Employees) => employee.name.toLowerCase().includes(filterText!)||employee.surname.toLowerCase().includes(filterText!));
  }

}
