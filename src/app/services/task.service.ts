import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const urlAPI = 'http://localhost:5000/tasks';
const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(urlAPI);
  }
  deleteTask(task: Task): Observable<Task> {
    const url = `${urlAPI}/${task.id}`;
    return this.http.delete<Task>(url);

  }
  setReminder(task: Task): Observable<Task> {
    const url = `${urlAPI}/${task.id}`;
    return this.http.put<Task>(url, task, httpHeaders);
  }
}
