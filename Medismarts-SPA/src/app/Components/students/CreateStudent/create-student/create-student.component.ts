import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Students } from 'src/app/Models/Students';
import { StudentService } from 'src/app/Services/student.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'pm-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  pageTitle: string = 'Create Student';
  formGroup: FormGroup;
  model:Students;

  constructor(private formBuilder: FormBuilder, 
              private studentService: StudentService,
              private snackBar: MatSnackBar,
              private _dialogRef: MatDialogRef<CreateStudentComponent>) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm() {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      courseOfStudy: new FormControl('', [Validators.required]),
      degree: new FormControl('', [Validators.required]),
      faculty: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      bio: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
    })
}

  createComand(){
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
   
       if(instructionModel.name!='' ||instructionModel.gender!='' || instructionModel.dateOfBirth!=null){
         
         this.studentService.addStudent(instructionModel).subscribe(result=>{
           this.snackBar.open('Created Successfully', 'Ok',
          {
            verticalPosition: 'top', horizontalPosition: 'center', duration: 20000, panelClass: ['blue-snackbar']
          });
       }),(error: any)=>{
        this.snackBar.open('ERROR Something went wrong, please try again', 'Ok',
          {
            verticalPosition: 'top', horizontalPosition: 'center', duration: 20000, panelClass: ['blue-snackbar']
          });
       console.log("we logged something", instructionModel);
     }
     }
     else{
       this.snackBar.open('All fields are compulsory', 'Ok',
          {
            verticalPosition: 'top', horizontalPosition: 'center', duration: 20000, panelClass: ['blue-snackbar']
          });
     }
    }

     closeDialog() {
      this._dialogRef.close();
    }
}
