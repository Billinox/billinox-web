import { Component, inject } from '@angular/core';
import { HlmDialogService } from '@billinox/src/app/components/uis/dialog/src';
import { NgIcon } from '@ng-icons/core';
import { lucidePlus, lucideReceiptText } from '@ng-icons/lucide';
import { DocumentItemForm } from '../../modals/document-item-form/document-item-form';

@Component({
  selector: 'app-document-items-card',
  imports: [NgIcon],
  templateUrl: './document-items-card.html',
  styleUrl: './document-items-card.css',
})
export class DocumentItemsCard {
  public lucidePlus = lucidePlus;
  public lucideReceiptText = lucideReceiptText;

  private dialogService = inject(HlmDialogService);

  public addOrEditItem() {
    this.dialogService.open(DocumentItemForm, {
      closeOnBackdropClick: false,
      context: {},
    });
  }
}
