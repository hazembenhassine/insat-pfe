import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Professor} from "../../../core/models/professor.model";
import {Enterprise} from "../../../core/models/entreprise.model";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {Project} from "../../../core/models/project.model";
import {ProjectsService} from "../../../core/services/projects.service";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  professors: Professor[]
  loading = false

  formProject: FormGroup = this.formBuilder.group({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    supervisor: new FormControl('', [Validators.required]),
    enterpriseSupervisor: new FormControl('', [Validators.required]),
    tags: new FormArray([]),
    enterprise: this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
    })


  })
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private projectsService: ProjectsService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { professors: Professor[] }) => {
      this.professors = data.professors
    })
  }

  getTags() {
    const tags = this.formProject.get("tags") as FormArray;
    return tags.controls

  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      const tags = this.formProject.get("tags") as FormArray;
      tags.push(new FormControl(value.trim()));
    }

    if (input) {
      input.value = '';
    }
  }

  remove(index: number): void {
    const tags = this.formProject.get("tags") as FormArray;
    tags.removeAt(index);
  }

  addProject() {
    this.loading = true
    const project = <Project>this.formProject.value
    console.log(project)
    this.projectsService.addProject(project)
      .then(res => {
        this.toastr.success("Succesfully added the project")
      })
      .catch(error => {
        this.toastr.error(error.message)
      })
      .finally(() => {
        this.loading = false
      })
  }

}
