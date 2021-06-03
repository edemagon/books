import {Subject, Subscription} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
// import * as data from '../assets/books.json';
export class Book {
  image: string;
  title: string;
  author: string;
  category: string;
  votes: number;
  url: string;
  id: string;

}
@Injectable()
export class BookService {
  booksSubject = new Subject<any[]>();
  private books: Book[];
  constructor(private httpClient: HttpClient) {}
  // saveBooksToServer(): void {
  //   this.httpClient.put('https://books-interview-default-rtdb.europe-west1.firebasedatabase.app/books.json', this.books)
  //     .subscribe(
  //       () => {
  //         console.log('Books were saved to server !');
  //       },
  //       (error) => {
  //         console.log('An error occured during the saving of books: ' + error);
  //       }
  //     );
  // }
  loadBooks(): void{
    this.httpClient.get('assets/books.json').subscribe(data => {
      this.books = JSON.parse(JSON.stringify(data));
      this.emitBookSubject();
    });
  }
  emitBookSubject(): void {
    this.booksSubject.next(this.books.slice());
  }
  getBookById(id: string): Book{
    return this.books.find((book) => book.id === id);
  }
  getBookRank(id: string): number{
    const ranking = this.books.sort((bookA, bookB) => {
      if (bookA.votes < bookB.votes) {
        return -1;
      }
      else if (bookA.votes > bookB.votes) {
        return 1;
      }
      else {
        return 0;
      }
    });
    return ranking.findIndex((book) => book.id === id);
  }
  addVote(id): number{
    const book = this.books.find((b) => b.id === id);
    book.votes ++;
    this.emitBookSubject();
    return book.votes;
  }
}
