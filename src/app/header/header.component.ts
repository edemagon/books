import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {
  sessionTime: number;
  voteEnded: boolean;
  counterSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.voteEnded = false;
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.sessionTime = value;
      },
      (error) => {
        console.log('an error occurred when counting : ' + error);
      }
    );
  }
  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}
