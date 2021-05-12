import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Pusha Is\'pani';
  showAddTask = false;
  subscription!: Subscription ;

  constructor(private uiservice: UiService) {
    this.subscription = this.uiservice.onToggle().subscribe( v => this.showAddTask = v);
  }

  ngOnInit(): void {
  }
  toggleAddTask(): void {
    this.uiservice.toggleAddTask();
    if (this.showAddTask === true){
      console.log('Show');
    }
    console.log('Hide');
  }

}
