import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'single-component',
  outputs: ['putRingOnIt'],
  template: `
  <button (click)="liked()">Like it?</button>
  `
})
class SingleComponent {
  putRingOnIt: EventEmitter<string>;

  constructor() {
    this.putRingOnIt = new EventEmitter();
  }

  liked(): void {
    this.putRingOnIt.emit("oh oh oh");
  }
}