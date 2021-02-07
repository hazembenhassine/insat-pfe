import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Project} from "../../../core/models/project.model";
import {Field, Student} from "../../../core/models/student.model";
import {SessionsService} from "../../../core/services/sessions.service";
import {Session} from "../../../core/models/sessions.model";
import {Professor} from "../../../core/models/professor.model";
import {ActivatedRoute} from "@angular/router";
import {Room} from "../../../core/models/conference.model";
import {SoutenancesService} from "../../../core/services/soutenances.service";
import {ProjectsService} from "../../../core/services/projects.service";

@Component({
  selector: 'app-plan-session',
  templateUrl: './plan-session.component.html',
  styleUrls: ['./plan-session.component.scss']
})
export class PlanSessionComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;
  loading = true
  roomFormGroup: FormGroup;
  allRooms = Object.keys(Room).filter(k => typeof Room[k as any] === "number");
  session: Session
  selectedTimeslot: any;
  timeslotFromGroup: FormGroup;
  reservedDates = [new Date("2021/02/08 10:00:00").toISOString()]
  juryFormGroup = new FormGroup(
    {
      "jurys": new FormArray([])
    }
  )
  numberOfJury = 2
  jurys = this.juryFormGroup.get('jurys') as FormArray;
  president: Professor = <Professor>{
    id: "4",
    name: "Lilia",
    lastName: "Sfaxi",
    email: "sby@gmail.com",
    department: "GMI",
    rank: "Maitre Assistant"
  }

  allProfessors: Professor[]


  constructor(private formBuilder: FormBuilder,
              private sessionsService: SessionsService,
              private activatedRouter: ActivatedRoute,
              private soutenancesSession: SoutenancesService,
              private projectsService: ProjectsService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { professors: Professor[] }) => {
      this.allProfessors = data.professors
      console.log(data.professors)
    })
    const sessionId = this.activatedRouter.snapshot.params['id'];
    this.getSessionById(sessionId)
    this.projectsService.getProjectBySessionId(sessionId).then(
      (projects: Project[]) => {
        console.log(projects)
        this.projects = projects.filter(project => project.state ==="CONFIRMED")
      }
    )
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
    const availableProfessor = this.allProfessors.filter(availableP => this.jurys.value.every(selectedP => selectedP.id !== availableP.id))
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

  getSessionById(sessionId: string) {
    this.loading = true
    this.sessionsService.getSessionById(sessionId).subscribe(
      (value: any) => {
        this.session = value;
        this.session.startDate = this.session.startDate.split("T")[0]
        this.session.endDate = this.session.endDate.split("T")[0]
        this.loading = false
      }, err => {
        console.log(err)
      }
    )
  };
}
