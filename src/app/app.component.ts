import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, group } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'bim-project';
  courses = [
    'javascript',
    'Angular'
  ]
 
}
