import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Professor} from "../../../core/models/professor.model";
import {Enterprise} from "../../../core/models/entreprise.model";
import {UsersService} from "../../../core/services/users.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  professors: Professor[]
  enterprises: Enterprise[]
  newEnterprise: boolean = false
  loading = false

  formProject: FormGroup = this.formBuilder.group({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    supervisor: new FormControl('', [Validators.required]),
    enterpriseSupervisor: new FormControl('', [Validators.required]),
    enterprise: this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      contact: new FormControl('', [Validators.required]),
    })



  })
  formEnterprise: FormGroup = this.formBuilder.group({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    supervisor: new FormControl('', [Validators.required]),
    enterpriseSupervisor: new FormControl('', [Validators.required]),
    enterprise: new FormControl('', [Validators.required]),

  })

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { professors: Professor[], enterprises: Enterprise[] }) => {
      console.log(data)
      this.professors = data.professors
      this.enterprises = data.enterprises
    })
  }


}
