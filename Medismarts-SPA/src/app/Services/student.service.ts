import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Students } from "../Models/Students";

@Injectable({
    providedIn: 'root'
})
export class StudentService{
    private studentUrl = 'api/products/students.json';
    constructor(private _httpClient: HttpClient) {}

protected apiURL = environment.baseURIPath;


getStudents(): Observable<Students[]> {
    return this._httpClient
     .get<Students[]>(this.apiURL + '/api/students')
    //.get<Students[]>(this.studentUrl)
      .pipe(retry(3), catchError(this.handleError));
  }

  getStudentByID(studentId: number): Observable<Students[]> {
    return this._httpClient
      .get<Students[]>(this.apiURL + '/api/customer/getAllCustomerEmails/' + studentId)
      .pipe(retry(3), catchError(this.handleError));
  }

  addStudent(payload: Students) {
    console.log(payload);

    return this._httpClient
      .post<any>(this.apiURL + '/api/students', payload)
      .pipe(catchError(this.handleError));
  }

  updateStudent(payload: Students) {
    debugger;
    console.log(payload);

    return this._httpClient
      .put<any>(this.apiURL + '/api/students', payload)
      .pipe(catchError(this.handleError));
  }

  deleteStudent(id: number) {
    return this._httpClient
      .delete<any>(this.apiURL + '/api/students/' + id)
      .pipe(retry(3), catchError(this.handleError));
  }

handleError(error: any) {
    let errorMessage = 'Something went wrong, please try again';
    return throwError(errorMessage);
  }
}

 