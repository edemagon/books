import {Component, Input, OnInit} from '@angular/core';
import {BookService} from '../services/book.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {
  @Input() bookName: string;
  @Input() id: string;
  alreadyVoted: boolean;
  book: any;
  booksSubbscription: Subscription;
  // @Input() book: any;
  // @Input() bookId: number;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.alreadyVoted = false;
    this.book = this.bookService.getBookById(this.id);
    this.booksSubbscription = this.bookService.booksSubject.subscribe(
      () => {
        console.log('book a changé');
        this.book = this.bookService.getBookById(this.id);
      });
  }

  onVote(): void{
    this.alreadyVoted = true;
    this.bookService.addVote(this.id);
  }
}
