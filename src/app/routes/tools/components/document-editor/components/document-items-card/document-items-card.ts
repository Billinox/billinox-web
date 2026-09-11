import { Component, inject, Signal } from '@angular/core';
import { HlmDialogService } from '@billinox/src/app/components/uis/dialog/src';
import { NgIcon } from '@ng-icons/core';
import { lucidePlus, lucideReceiptText } from '@ng-icons/lucide';
import { DocumentItemForm } from '../../modals/document-item-form/document-item-form';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import {
  DocumentItemData,
  DocumentStateDataModel,
} from '@billinox/src/app/models/document.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-document-items-card',
  imports: [NgIcon, CurrencyPipe],
  templateUrl: './document-items-card.html',
  styleUrl: './document-items-card.css',
})
export class DocumentItemsCard {
  public lucidePlus = lucidePlus;
  public lucideReceiptText = lucideReceiptText;
  public state!: Signal<DocumentStateDataModel>;

  private dialogService = inject(HlmDialogService);
  private _documentStateService = inject(DocumentStateService);

  ngOnInit(): void {
    this.state = this._documentStateService.state;
  }

  public addOrEditItem(context?: { item: DocumentItemData; index: number }) {
    this.dialogService.open(DocumentItemForm, {
      closeOnBackdropClick: false,
      context,
    });
  }
}
