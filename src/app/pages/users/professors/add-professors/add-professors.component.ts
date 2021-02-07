import {Component, OnInit, ViewChild} from '@angular/core';
import {Field, Level, Student} from "../../../../core/models/student.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Department, Professor, Rank} from "../../../../core/models/professor.model";

@Component({
  selector: 'app-add-professors',
  templateUrl: './add-professors.component.html',
  styleUrls: ['./add-professors.component.scss']
})
export class AddProfessorsComponent implements OnInit {


  ngOnInit(): void {
  }

  title = 'Angular7AppReadCSV';
  ranks = Object.keys(Rank).filter(k => typeof Rank[k as any] === "number");
  departments = Object.keys(Department).filter(k => typeof Department[k as any] === "number");

  public professors: Professor[] = [];
  @ViewChild('csvReader') csvReader: any;
  formProfessor: FormGroup = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    department: new FormControl('', [Validators.required]),
    rank: new FormControl('', [Validators.required]),
  })

  constructor(private formBuilder: FormBuilder) {

  }

  getErrorMessage(formControl) {
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    } else if (formControl.hasError('email')) {
      return 'Not a valid email';
    } else if (formControl.hasError('minlength')) {
      return `Minimum length is ${formControl.errors.minlength.requiredLength}`;
    }
  }

  uploadListener($event: any): void {
    const text = [];
    const files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {

      const input = $event.target;
      const reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        const csvData = reader.result;
        const csvRecordsArray = (csvData as string).split(/\r\n|\n/);

        const headersRow = this.getHeaderArray(csvRecordsArray);

        this.professors = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      };

      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };

    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    const professors = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      const curruntRecord = (csvRecordsArray[i] as string).split(',');
      if (curruntRecord.length === headerLength) {
        const firstName = curruntRecord[0].trim();
        const lastName = curruntRecord[1].trim();
        const email = curruntRecord[2].trim();
        const rank = curruntRecord[3].trim();
        const department = curruntRecord[4].trim();
        const csvRecord: Professor = new Professor("0", firstName, lastName, email, rank, department);
        professors.push(csvRecord);
      }
    }
    return professors;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  getHeaderArray(csvRecordsArr: any) {
    const headers = (csvRecordsArr[0] as string).split(',');
    const headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = "";
    this.professors = [];
  }

  addProfessors() {

  }

  addProfessor() {

  }
}
