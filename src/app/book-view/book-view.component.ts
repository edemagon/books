import { Component, OnInit } from '@angular/core';
import {Book, BookService} from '../services/book.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.less']
})
export class BookViewComponent implements OnInit {
  title = 'sap-fe-books-view';
  books: Book[];
  booksSubscription: Subscription;

  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.booksSubscription = this.bookService.booksSubject.subscribe(
      (books: any[]) => {
        this.books = books;
      });
    this.onLoad();
  }
  onLoad(): void {
    this.bookService.loadBooks();
  }
  onSortBy(property: string): void {
    this.books = this.books.sort((bookA, bookB) => {
      if (bookA[property] < bookB[property]) {
        return -1;
      }
      else if (bookA[property] > bookB[property]) {
        return 1;
      }
      else {
        return 0;
      }
    });
  }
  // onSave(): void {
  //   this.bookService.saveBooksToServer();
  // }

}
