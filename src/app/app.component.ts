import { Component } from '@angular/core';
import { quotes } from '../mock-data'; 
import { Quote } from './blueprint/quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes-app';
  qoutes:Quote[];

  constructor() {
    this.qoutes = quotes
  }

  delete(index:number){
    this.qoutes.splice(index, 1);
  }

  addQuote(quote:Quote ){
    quote.date = new Date(quote.date);
    let copyOfQuote = {...quote}
    quotes.push(copyOfQuote);
  }
  
}
