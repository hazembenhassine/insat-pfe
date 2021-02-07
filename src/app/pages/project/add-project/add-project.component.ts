import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  formProject: FormGroup = this.formBuilder.group({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    supervisor: new FormControl('', [Validators.required]),
    cin: new FormControl('', [Validators.required]),
    rank: new FormControl('', [Validators.required]),
  })

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
