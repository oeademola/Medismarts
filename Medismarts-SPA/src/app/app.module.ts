import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { RouterModule } from '@angular/router';
import { StudentsComponent } from './Components/students/students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UpdateStudentComponent } from './Components/students/update-student/update-student.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewStudentComponent } from './Components/students/view-student/view-student.component';
import { CreateStudentComponent } from './Components/students/CreateStudent/create-student/create-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertToSpacesPipe,
    StarComponent,
    StudentsComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    ViewStudentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: 'students', component: StudentsComponent },
      { path: 'createstudent', component: CreateStudentComponent },
      { path: 'students', component: StudentsComponent },
      { path: '', redirectTo: 'students', pathMatch: 'full' },
      { path: '**', redirectTo: 'students', pathMatch: 'full' }
    ]),
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
