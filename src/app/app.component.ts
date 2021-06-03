import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookService} from './services/book.service';

import {error} from "selenium-webdriver";
import {Observable, Subscription} from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'sap-fe-interviews';
  ok: boolean;
  secondes: number;
  voteEnded: boolean;
  counterSubscription: Subscription;
  constructor() {
    this.ok = true;
  }
  ngOnInit(): void {
    this.voteEnded = false;
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }
  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
