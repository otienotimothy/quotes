import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../../blueprint/quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote("", "", "", new Date());

  @Output() addQuote = new EventEmitter<Quote>()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.newQuote);
    this.addQuote.emit(this.newQuote);
  }

}
