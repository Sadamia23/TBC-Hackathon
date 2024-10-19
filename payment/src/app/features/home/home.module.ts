import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';


@NgModule({
  declarations: [
    HomePageComponent,
    TransactionsListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
