import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Project} from "../../../shared/models/project.model";
import {Student} from "../../../shared/models/student.model";
import {SessionsService} from "../sessions.service";

@Component({
  selector: 'app-plan-session',
  templateUrl: './plan-session.component.html',
  styleUrls: ['./plan-session.component.scss']
})
export class PlanSessionComponent implements OnInit {

  isLinear = false;
  roomFormGroup: FormGroup;
  timeslotFromGroup: FormGroup;
  secondFormGroup: FormGroup;
  projects: Project[];
  allRooms = [1, 2, 3, 4, 5];

  constructor(private formBuilder: FormBuilder, private sessionsService: SessionsService) {
  }

  ngOnInit() {
    this.projects = this.sessionsService.getProjects();

    this.roomFormGroup = this.formBuilder.group({
      room: ['', Validators.required, Validators.minLength(8)]
    });
    this.timeslotFromGroup = this.formBuilder.group({
      timeslot: ['', Validators.required]
    });
  }
}
