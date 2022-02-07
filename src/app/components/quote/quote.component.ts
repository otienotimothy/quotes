import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../blueprint/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quoteObj!: Quote;
  @Output() deleteQuote = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(){
    console.log('clicked')
    this.quoteObj.showDetails = !this.quoteObj.showDetails
  }

  onDelete(){
    this.deleteQuote.emit();
  }

}
