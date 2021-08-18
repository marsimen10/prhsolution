import { Component, OnInit } from '@angular/core';
import {PositionService} from '../services/position.service';
import {MissionService} from '../services/mission.service';
import {Mission} from '../model/Mission';
import {Position} from '../model/Position';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  mission: Mission = new Mission();
  displayMissionModal = false;
  missions: Array<any> = [];
  positions: Array<Position> = [];
  title = 'Ajouter mission';



  constructor( private missionService: MissionService , private  positionService: PositionService) { }
  ngOnInit(): void {
    this.getAllPositions();
    this.getAllMissions();
  }
  getAllPositions(){
    this.positionService.getAllPositions().subscribe(data => {
      this.positions = data;
    });
  }
  saveMission(): void {
    this.missionService.saveMission(this.mission)
      .subscribe(position => {
        this.displayMissionModal = false;
        this.getAllPositions();
      }, error => console.log(error));
  }

  showAddMission(){
    this.title = 'Ajouter mission';
    this.displayMissionModal = true;
    this.mission = new Mission();
  }
  showEditMission(mission: any){
    this.title = 'Edit mission';
    this.displayMissionModal = true;
    this.mission = mission;
  }
  closeMissionModal(): void {
    this.displayMissionModal = false;
  }
  getAllMissions(){
    this.missionService.getAllMissions().subscribe(data => {
      this.missions = data;
    });
  }
}
