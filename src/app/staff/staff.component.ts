import { Component, OnInit } from '@angular/core';
import staff from '../../assets/static/staff.json';
import { Member } from "./member.model";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  management: Member[];
  committee: Member[];
  crew: Member[];

  constructor() { }

  ngOnInit() {
    this.management = staff.management;
    this.committee = staff.committee;
    this.crew = staff.crew;
  }
}
