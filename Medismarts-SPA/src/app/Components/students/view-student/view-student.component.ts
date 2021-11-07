import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Students } from 'src/app/Models/Students';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'pm-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  pageTitle: string = 'Student Detail';
  formGroup: FormGroup;
  studentModel:Students;


  constructor(private formBuilder: FormBuilder, 
              private studentService: StudentService,
              private snackBar: MatSnackBar,
              private _dialogRef: MatDialogRef<ViewStudentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { 
                this.studentModel = data.model;
              }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm() {
    debugger;
    this.formGroup = this.formBuilder.group({
      name: new FormControl(this.studentModel.name, [Validators.required]),
      gender: new FormControl(this.studentModel.gender, [Validators.required]),
      dateOfBirth: new FormControl(this.studentModel.dateOfBirth, [Validators.required]),
      courseOfStudy: new FormControl(this.studentModel.courseOfStudy, [Validators.required]),
      degree: new FormControl(this.studentModel.degree, [Validators.required]),
      faculty: new FormControl(this.studentModel.faculty, [Validators.required]),
      department: new FormControl(this.studentModel.department, [Validators.required]),
      bio: new FormControl(this.studentModel.bio, [Validators.required]),
      city: new FormControl(this.studentModel.city, [Validators.required]),
      country: new FormControl(this.studentModel.country, [Validators.required]),
    })
}

updateComand(){
    debugger;
       let instructionModel:Students={
        name:this.formGroup.value.name,
        gender:this.formGroup.value.gender,
        dateOfBirth:this.formGroup.value.dateOfBirth,
        courseOfStudy:this.formGroup.value.courseOfStudy,
        degree:this.formGroup.value.degree,
        faculty:this.formGroup.value.faculty,
        department:this.formGroup.value.department,
        bio:this.formGroup.value.bio,
        city:this.formGroup.value.city,
        country:this.formGroup.value.country
       };
    }

    closeDialog() {
      this._dialogRef.close();
    }
}
