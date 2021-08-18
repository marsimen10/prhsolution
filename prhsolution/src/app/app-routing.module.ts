import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyComponent} from './company/company.component';
import {DepartmentComponent} from './department/department/department.component';
import {PostionComponent} from './postion/postion.component';
import {MissionComponent} from './mission/mission.component';

const routes: Routes = [
  {path : 'company' , component : CompanyComponent},
  {path : 'department' , component : DepartmentComponent},
  {path : 'position' , component : PostionComponent},
  {path : 'mission' , component : MissionComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
