import { Component, inject, OnInit, Signal } from '@angular/core';
import { HlmDialogService } from '@billinox/src/app/components/uis/dialog/src';
import { NgIcon } from '@ng-icons/core';
import {
  lucideBadgePercent,
  lucideChevronRight,
  lucideTicketPercent,
  lucideTruck,
} from '@ng-icons/lucide';
import { DocumentDiscountForm } from '../../modals/document-discount-form/document-discount-form';
import { DocumentTaxForm } from '../../modals/document-tax-form/document-tax-form';
import { DocumentShippingForm } from '../../modals/document-shipping-form/document-shipping-form';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import {
  DocumentStateDataModel,
  DocumentTaxData,
} from '@billinox/src/app/models/document.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-document-summary-card',
  imports: [NgIcon, CurrencyPipe],
  templateUrl: './document-summary-card.html',
  styleUrl: './document-summary-card.css',
})
export class DocumentSummaryCard implements OnInit {
  public lucideBadgePercent = lucideBadgePercent;
  public lucideTruck = lucideTruck;
  public lucideTicketPercent = lucideTicketPercent;
  public lucideChevronRight = lucideChevronRight;
  public state!: Signal<DocumentStateDataModel>;

  private _dialogService = inject(HlmDialogService);
  private _documentStateService = inject(DocumentStateService);

  public openDiscountForm = () => {
    this._dialogService.open(DocumentDiscountForm, {
      closeOnBackdropClick: false,
    });
  };

  public addOrEditTax = (context?: { tax: DocumentTaxData; index: number }) => {
    this._dialogService.open(DocumentTaxForm, {
      closeOnBackdropClick: false,
      context: context,
    });
  };

  public openShippingForm = () => {
    this._dialogService.open(DocumentShippingForm, {
      closeOnBackdropClick: false,
    });
  };

  ngOnInit(): void {
    this.state = this._documentStateService.state;
  }
}
