import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() tasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }
  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }
  setReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.setReminder(task).subscribe();
  }
  addTask(task: Task): void{
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task) );
  }

}
