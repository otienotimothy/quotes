import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../blueprint/quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
})
export class QuoteFormComponent implements OnInit {
  // author = '';
  // quote = '';
  // addedBy = '';
  // date = new Date();
  // newQuote = new Quote(this.author, this.quote, this.addedBy, new Date());

  newQuote = new Quote('', '', '', new Date());

  @Output() addQuote = new EventEmitter<Quote>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    // this.newQuote.quote = this.quote;
    // this.newQuote.author =this.author;
    // this.newQuote.addedBy = this.addedBy;
    // this.newQuote.date = this.date;
    this.addQuote.emit(this.newQuote);
  }
}
