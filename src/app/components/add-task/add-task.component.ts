import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  day: string;
  reminder: boolean;
  constructor() {
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.text){
      alert('Please enter text and time ');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };
    this.onAddTask.emit(newTask);

    this.day = '';
    this.text = '';
    
  }

}
