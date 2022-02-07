import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faThumbsUp, faThumbsDown, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrash = faTrash

  @Output() delete = new EventEmitter();
  @Input() upvote!:number;
  @Input() downvote!:number;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.delete.emit();
  }

}
