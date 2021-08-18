import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CompanyComponent } from './company/company.component';
import {FormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TooltipModule} from 'primeng/tooltip';
import { DepartmentComponent } from './department/department/department.component';
import { PostionComponent } from './postion/postion.component';
import { MissionComponent } from './mission/mission.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompanyComponent,
    DepartmentComponent,
    PostionComponent,
    MissionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DialogModule,
    ButtonModule,
    TooltipModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
