import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

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
  });

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  tags: string[] = [
    'Lemon',
    'Lime',
    'Apple',
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: string): void {
    const index = this.tags.indexOf(fruit);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

}
