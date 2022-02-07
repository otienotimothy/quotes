import { Component } from '@angular/core';
import { quotes } from '../mock-data'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes-app';
  qoutes = quotes

  constructor() {}

  delete(index:number){
    this.qoutes.splice(index, 1);
  }
  
}
