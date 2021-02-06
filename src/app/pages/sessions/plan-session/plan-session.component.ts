import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Project} from "../../../core/models/project.model";
import {Student} from "../../../core/models/student.model";
import {SessionsService} from "../../../core/services/sessions.service";
import {Session} from "../../../core/models/sessions.model";
import {Professor} from "../../../core/models/professor.model";

@Component({
  selector: 'app-plan-session',
  templateUrl: './plan-session.component.html',
  styleUrls: ['./plan-session.component.scss']
})
export class PlanSessionComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;

  roomFormGroup: FormGroup;
  allRooms = [1, 2, 3, 4, 5];

  selectedTimeslot: any;
  timeslotFromGroup: FormGroup;
  session: Session = {"startDate": "2021/02/08", "endDate": "2021/02/14"}
  reservedDates = [new Date("2021/02/08 10:00:00").toISOString()]

  juryFormGroup = new FormGroup(
    {
      "jurys": new FormArray([])
    }
  )
  numberOfJury = 2
  jurys = this.juryFormGroup.get('jurys') as FormArray;
  president = new Professor("1", "Riadh", "Robanna", "@", "info", "Docteur")
  prof1 = new Professor("2", "Aymen", "Sellaouit", "@", "info", "Docteur")
  prof2 = new Professor("3", "Lilia", "Sfaxi", "@", "info", "Docteur")
  prof3 = new Professor("4", "Narjes", "Robanna", "@", "info", "Docteur")
  allProfessors = [this.prof1, this.prof2, this.prof3]


  constructor(private formBuilder: FormBuilder, private sessionsService: SessionsService) {
  }

  ngOnInit() {
    this.projects = this.sessionsService.getProjects();
    this.roomFormGroup = this.formBuilder.group({
      room: ['', [Validators.required]]
    });
    this.timeslotFromGroup = this.formBuilder.group({
      timeslot: ['', Validators.required]
    });

    for (let i = 0; i < this.numberOfJury; i++) {
      this.jurys.push(new FormControl("", Validators.required))
    }
  }

  onProjectSelect(project) {
    this.selectedProject = project
  }

  availableProfessors(i) {
    let availableProfessor = this.allProfessors.filter(availableP => this.jurys.value.every(selectedP => selectedP.id !== availableP.id))
    if (this.jurys.value[i]) {
      availableProfessor.push(this.jurys.value[i])
    }
    return availableProfessor
  }


  compareById(p1: Professor, p2: Professor) {
    return p1.id === p2.id;
  }


  planSession() {
    const room = this.roomFormGroup.value
    const selectedJurys = this.jurys.value
    console.log(`Project: ${this.selectedProject.title}, Room: ${room}, Timeslot: ${this.selectedTimeslot}, Jurys: ${selectedJurys}`)
  }

  setTimeslot(timeslot: any) {
    this.selectedTimeslot = timeslot
    console.log(`The selected time is ${this.selectedTimeslot}`)
  }
}
