import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.less']
})
export class SingleBookComponent implements OnInit {
  book: any;
  comment = '';
  constructor(private bookService: BookService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log('id : ' + id);
    this.book = this.bookService.getBookById(id);
    this.getRank();
  }
  getRank(): void {
    this.book.rank = this.bookService.getBookRank(this.book.id);
  }
  getIcon(): string {
    let icon: string;
    switch (this.book.category) {
      case 'science fiction' :
        icon = 'globe';
        break;
      case 'mystery & thriller' :
        icon = 'grimace';
        break;
      case 'food & cookbooks' :
        icon = 'utensils';
        break;
      case 'fantasy' :
        icon = 'dragon';
        break;
      case 'romance' :
        icon = 'grin-hearts';
        break;
      case 'horror' :
        icon = 'ghost';
        break;
      case 'humor' :
        icon = 'grin-tears';
        break;
      default :
        icon = 'theater-masks';
    }
    return icon;
  }

}
