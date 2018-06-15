import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Card } from '../../model/Card';

@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.css']
})
export class TrivialComponent implements OnInit {
  result: any;
  cardArray = new Array<Card>();
  constructor(public service: RequestService) { }
  ok = 0;
  ko = 0;
  ngOnInit() {
    this.getApiInfo();
  }
  contarResultados(event) {
    if (event.ok) {
      this.ok += 1;
    } else {
      this.ko += 1;
    }
    console.log('ok ' + this.ok + ' ko ' + this.ko);
  }
  getApiInfo() {
    this.service.getRequest().subscribe(
      data => this.processResult(data),
      error => this.processError(error),
      () => this.processFinal()
    );
  }
  processResult(data: any) {
    for (const item of data.results) {
      this.cardArray.push(new Card(item));
    }
    this.result = data;
  }
  processError(error: any) {}
  processFinal() {}
}

