import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../services/department.service';
import {PositionService} from '../services/position.service';
import {Position} from '../model/Position';

@Component({
  selector: 'app-postion',
  templateUrl: './postion.component.html',
  styleUrls: ['./postion.component.css']
})
export class PostionComponent implements OnInit {

  position: Position = new Position();
  displayPositionModal = false;
  positions: Array<any> = [];
  departments: Array<any> = [];
  title = 'Ajouter position';

  constructor( private departmentService: DepartmentService , private  positionService: PositionService) { }
  ngOnInit(): void {
    this.getAllPositions();
    this.getAllDepartment();
  }
  getAllPositions(){
    this.positionService.getAllPositions().subscribe(data => {
      this.positions = data;
    });
  }
  savePosition(): void {
    this.positionService.savePositions(this.position)
      .subscribe(position => {
        this.displayPositionModal = false;
        this.getAllPositions();
      }, error => console.log(error));
  }

  showAddPosition(){
    this.title = 'Ajouter position';
    this.displayPositionModal = true;
    this.position = new Position();
  }
  showEditPosition(position: any){
    this.title = 'Edit position';
    this.displayPositionModal = true;
    this.position = position;
  }
  closePositionModal(): void {
    this.displayPositionModal = false;
  }
  getAllDepartment(){
    this.departmentService.getAllDepartments().subscribe(data => {
      this.departments = data;
    });
  }
}
