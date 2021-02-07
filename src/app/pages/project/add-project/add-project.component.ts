import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  formProfessor: FormGroup = this.formBuilder.group({
    title: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    department: new FormControl('', [Validators.required]),
    cin: new FormControl('', [Validators.required]),
    rank: new FormControl('', [Validators.required]),
  })

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
