import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  faTimes = faTimes;
  @Input() task!: Task;
  @Output() delete: EventEmitter<Task> = new EventEmitter();
  @Output() reminder: EventEmitter<Task> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task: Task): void {
    this.delete.emit(task);
    console.log('Completed : ' + task.text);
  }
  onDoubleClick(task: Task): void {
    this.reminder.emit(task);
    // task.reminder = !task.reminder;
  }
}
