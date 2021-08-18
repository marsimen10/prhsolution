import {Department} from './Department';

export class Position {
  idPosition: any;
  namePosition: any;
  experiencePosition: any;
  department: Department = new Department();
  missions: Array<any> = [];

}
