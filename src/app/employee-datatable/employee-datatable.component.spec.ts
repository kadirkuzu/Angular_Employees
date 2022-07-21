import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDatatableComponent } from './employee-datatable.component';

describe('EmployeeDatatableComponent', () => {
  let component: EmployeeDatatableComponent;
  let fixture: ComponentFixture<EmployeeDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
