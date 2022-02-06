export class Quote {
  quote: string;
  author: string;
  addedBy: string;
  date: Date;

  constructor(quote: string, author: string, addedBy: string, date: Date) {
    (this.quote = quote),
      (this.author = author),
      (this.addedBy = addedBy),
      (this.date = date);
  }
}
