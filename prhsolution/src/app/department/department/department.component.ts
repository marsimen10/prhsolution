import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../../services/department.service';
import {Department} from '../../model/Department';
import {Company} from '../../model/Company';
import {CompanyService} from '../../services/company.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  department: Department = new Department();
  displayDepartmentModal = false;
  departments: Array<any> = [];
  companies: Array<any> = [];
  title = 'Ajouter department';

  constructor( private departmentService: DepartmentService , private  companyService: CompanyService) { }
  ngOnInit(): void {
    this.getAllDepartment();
    this.getAllCompanies();
  }

  getAllDepartment() {
    this.departmentService.getAllDepartments().subscribe(data => {
      this.departments = data;
    });
  }

  saveDepartment(): void {
    this.departmentService.saveDepartment(this.department)
      .subscribe(department => {
        this.displayDepartmentModal = false;
        this.getAllDepartment();
      }, error => console.log(error));
  }

  showAddDepartment() {
    this.title = 'Ajouter department';
    this.displayDepartmentModal = true;
    this.department = new Department();
  }

  showEditDepartment(department: any){
    this.title = 'Edit department';
    this.displayDepartmentModal = true;
    this.department = department;
  }
  closeDepartmentModal(): void {
    this.displayDepartmentModal = false;
  }
  getAllCompanies(): void {
    this.companyService.getAllCompanies().subscribe(data => {
      this.companies = data;
    });
  }
}
