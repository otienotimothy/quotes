export class Quote {
  quote: string;
  author: string;
  addedBy: string;
  date: Date;
  showDetails: boolean;
  upvote: number;
  downvote: number;

  constructor(quote: string, author: string, addedBy: string, date: Date) {
    (this.quote = quote),
      (this.author = author),
      (this.addedBy = addedBy),
      (this.date = date);
    this.showDetails = false;
    this.upvote = 0;
    this.downvote = 0;
  }
}
