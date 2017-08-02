import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from '../app.component';
import { TransactionComponent } from '../transaction/transaction-row/transaction.component';
import { TransactionFormComponent } from '../transaction/transaction-form/transaction-form.component';
import { TransactionViewComponent } from '../transaction/transaction-view.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    TransactionFormComponent,
    TransactionViewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
