import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';


//ngoninit is lifecycle hook in angularjs with a ngoninit() method in a component. one act as constructor executes one after the other.
//observable sends the data from there.
//Here subscribe act as listen receive data, handle errors.


@Component({
  selector: 'app-student-list',
  imports: [
    MatButtonModule,
    RouterModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{
  //inject service to component
    private studentService = inject(StudentService);

    //show student data in html
    students!:Student[];

    ngOnInit(): void {
      this.studentService.get().subscribe(
        data =>{
          console.log('students:',data);
          this.students = data
        },
        error=>{
          console.error('error:', error);
        }
      )
    }

    onDeleteClick(student:Student){
      throw new Error("Method not yet implemented");
    }

}
