import { Component } from '@angular/core';

const stack = ['MongoDB', 'ExpressJS', 'Angular', "NodeJS"]
const toDo = [
  {
    task: "Water Plants",
    status: "PENDING"
  },
  {
    task: "Take out trash",
    status: "PENDING"
  },
  {
    task: "Clean living room",
    status: "DONE"
  },
  {
    task: "Study",
    status: "PENDING"
  },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
  message = 'MEAN Stack' // Is passed to the view
  stack = stack
  toDo = toDo
}
