import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { lucidePlus, lucideReceipt, lucideReceiptText } from '@ng-icons/lucide';

@Component({
  selector: 'app-document-items-card',
  imports: [NgIcon],
  templateUrl: './document-items-card.html',
  styleUrl: './document-items-card.css',
})
export class DocumentItemsCard {
  public lucidePlus = lucidePlus;
  public lucideReceiptText = lucideReceiptText;
}
