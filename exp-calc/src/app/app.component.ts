import { Component } from '@angular/core';

import { Transaction } from './transaction-view/transaction/transaction.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  transactions: Transaction[] = [];

  constructor() {
  }

  addArticle(title: HTMLInputElement, category: HTMLInputElement, period: HTMLInputElement, value: HTMLInputElement): boolean {
    console.log(`Title: ${title.value} , category: ${category.value}, period: ${period.value}, value: ${value.value}`);
    this.transactions.push(new Transaction(title.value, category.value, period.value, value.value));
    title.value = '';
    category.value = '';
    period.value = '';
    value.value = '';
    return false;
  }

  sortedTransactions(): Transaction[] {
    return this.transactions.sort((a: Transaction, b: Transaction) => b.value.length - a.value.length);
  }

  exportJson(): void {
    var theJSON = JSON.stringify(this.transactions);
    console.log(theJSON);
    var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(theJSON);

    var a = document.createElement('a');
    a.href = uri;
    a.innerHTML = "Right-click and choose 'save as...'";
    document.body.appendChild(a);
  }

}
