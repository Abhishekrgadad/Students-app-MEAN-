import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private api = "http://localhost:3000/api/students";

  constructor(
    private http: HttpClient
  ) { }


 
  get(): Observable<Student[]>{
    return this.http.get<Student[]>(this.api);
  }

  getById(id:string):Observable<Student>{
    return this.http.get<Student>(this.api+'/'+id);
  }

  post(student:Student):Observable<Student>{
    return this.http.post<Student>(this.api, student);
  }

  put(id:string, student: Student) : Observable<Student>{
    return this.http.put<Student>(this.api+'/'+id,student);
  }

  delete(id:string) : Observable<Student>{
    return this.http.delete<Student>(this.api + '/'+ id);
  }

}
