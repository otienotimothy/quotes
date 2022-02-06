import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../../blueprint/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quoteObj!: Quote;

  constructor() { }

  ngOnInit(): void {
  }

}
