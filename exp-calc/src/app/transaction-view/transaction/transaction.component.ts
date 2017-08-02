import { Component, Input, OnInit } from '@angular/core';

import { Transaction } from './transaction.model';

@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  host: {
    class: 'row'
  }
})
export class TransactionComponent implements OnInit {

  @Input() transaction: Transaction;

  ngOnInit() {
  }

}
