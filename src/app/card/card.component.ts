import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../model/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() resultAvailable = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  setClasses(j: number) {
    const classes = {
      'btn-outline-primary': !this.card.responded,
      // tslint:disable-next-line:max-line-length
      'btn-danger': this.card.responded && j === this.card.answerIndex && !(this.card.answers[j] === this.card.correct_answer), // false
      'btn-success': this.card.correct && (this.card.answers[j] === this.card.correct_answer), // true
    };
    return classes;
    }

  answered(j: number) {
    // tslint:disable-next-line:max-line-length
    this.card.responded = true;
    this.card.answerIndex = j;
    this.card.correct = (this.card.answers[j] === this.card.correct_answer);
    this.resultAvailable.emit({ok : this.card.correct});
  }

}
