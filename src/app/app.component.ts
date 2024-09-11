import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentService } from './student.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[StudentService]
})
export class AppComponent {
  title = 'demo';
  students:any[];
  constructor(private s:StudentService){
    this.students=this.s.getStudents();
  }
}
