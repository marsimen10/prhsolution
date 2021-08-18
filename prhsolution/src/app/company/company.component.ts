import {CompanyService} from '../services/company.service';
import {Company} from '../model/Company';
import {OnInit, Component, Input} from '@angular/core';

@Component({
  selector: 'app-societe',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: Array<any> = [];
  company: Company = new Company();
  displayCompanyModal = false;
  title = 'Ajouter une  société';

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.getAllCompanies();
  }

  saveCompany(): void {
    this.companyService.saveCompany(this.company)
      .subscribe(company => {
        this.displayCompanyModal = false;
        this.getAllCompanies();
      }, error => console.log(error));
  }

  getAllCompanies(): void {
    this.companyService.getAllCompanies().subscribe(data => {
     this.companies = data;
    });
  }

  showEditCompany(company: any): void {
    this.title = 'Modifier societe';
    this.displayCompanyModal = true;
    this.company = company;
  }

  showAddCompany(): void {
    this.title = 'Ajouter societe';
    this.displayCompanyModal = true;
    this.company = new Company();
  }

  closeCompanyModal(): void {
    this.displayCompanyModal = false;
  }
}

