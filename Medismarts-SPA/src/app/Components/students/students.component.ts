import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Students } from 'src/app/Models/Students';
import { StudentService } from 'src/app/Services/student.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { CreateStudentComponent } from './CreateStudent/create-student/create-student.component';

@Component({
  selector: 'pm-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  pageTitle: string = 'Students';
  constructor(private studentService: StudentService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog, 
              private _cdr:ChangeDetectorRef) { }

  studentModel: Students[] = [];

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(){
    this.studentService.getStudents().subscribe(result=>{
      this.studentModel = result; 
      console.log("logged value from Client Instruction",result);
    });
  }


  createStudent(){
    const dialogRef = this.dialog.open(
      CreateStudentComponent,
      {
        disableClose: true,
        hasBackdrop: true,
        width: '800px',
        height: '500px'
      });
      dialogRef.afterClosed().subscribe(result => {
        this._cdr.detectChanges();
        this.getAllStudents();
     });
  }

  editStudent(model: any){
      const dialogRef = this.dialog.open(
        UpdateStudentComponent,
          {
            disableClose: true,
            hasBackdrop: true,
            width: '1000px',
            height: '500px',
            data: { model }
          }
        );;
        dialogRef.afterClosed().subscribe(result => {
          this._cdr.detectChanges();
          this.getAllStudents();
       });
    }

    viewStudent(model: any){
      const dialogRef = this.dialog.open(
        ViewStudentComponent,
          {
            disableClose: true,
            hasBackdrop: true,
            width: '1000px',
            height: '500px',
            data: { model }
          }
        );;
        dialogRef.afterClosed().subscribe(result => {
          this._cdr.detectChanges();
          this.getAllStudents();
       });
    }

    deleteStudent(item: any){
debugger;
      this.studentService.deleteStudent(item.id).subscribe(result=>{
        console.log("logged value for delete",result);
        if(result==null){
          this.snackBar.open('Deleted Successfully', 'Ok',
            {
              verticalPosition: 'top', horizontalPosition: 'center', duration: 20000, panelClass: ['blue-snackbar']
            });
            this.getAllStudents();
        }
        else  
        this.snackBar.open('Information could not be deleted', 'Ok',
            {
              verticalPosition: 'top', horizontalPosition: 'center', duration: 20000, panelClass: ['blue-snackbar']
            });  
      }),(error: any)=>{
        this.snackBar.open('A server-side error ovccurred', 'Ok',
            {
              verticalPosition: 'top', horizontalPosition: 'center', duration: 20000, panelClass: ['blue-snackbar']
            });
      }
      
    }

}
