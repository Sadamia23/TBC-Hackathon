import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrl: './transactions-list.component.scss',
})
export class TransactionsListComponent {
  transactions = [
    {
      date: '19 ოქტ 2024',
      description: 'თიბისი ბანკის MC ბარათებით სერვისებში',
      amount: -34.08,
    },
    {
      date: '15 ოქტ 2024',
      description: 'თიბისი ბანკის MC ბარათებით სერვისებში',
      amount: -78.4,
    },
    {
      date: '15 ოქტ 2024',
      description: 'TBCBank_nის MC ბარათებით ECOM/POS',
      amount: -17.81,
    },
    {
      date: '14 ოქტ 2024',
      description: 'TBCBank_nის MC ბარათებით ECOM/POS',
      amount: -5.5,
    },
    {
      date: '14 ოქტ 2024',
      description: 'TBCBank_nის MC ბარათებით ECOM/POS',
      amount: -0.98,
    },
  ];
}
