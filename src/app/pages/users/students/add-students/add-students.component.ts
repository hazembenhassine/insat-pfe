import {Component, OnInit, ViewChild} from '@angular/core';
import {Field, Level, Student} from "../../../../core/models/student.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.scss']
})

export class AddStudentsComponent {

  title = 'Angular7AppReadCSV';
  fields = Object.keys(Field).filter(k => typeof Field[k as any] === "number");
  levels = Object.keys(Level).filter(k => typeof Level[k as any] === "number");

  public students: Student[] = [];
  @ViewChild('csvReader') csvReader: any;
  formUser: FormGroup = this.formBuilder.group({
    nce: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    field: new FormControl('', [Validators.required]),
    level: new FormControl('', [Validators.required]),
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

        this.students = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
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
    const students = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      const curruntRecord = (csvRecordsArray[i] as string).split(',');
      if (curruntRecord.length === headerLength) {
        const nce = curruntRecord[0].trim();
        const firstName = curruntRecord[1].trim();
        const lastName = curruntRecord[2].trim();
        const email = curruntRecord[3].trim();
        const field = curruntRecord[4].trim();
        const level = curruntRecord[5].trim();
        const csvRecord: Student = new Student(nce, firstName, lastName, email, field, level);
        students.push(csvRecord);
      }
    }
    return students;
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
    this.students = [];
  }

  addStudents() {

  }
  addStudent() {

  }
}
