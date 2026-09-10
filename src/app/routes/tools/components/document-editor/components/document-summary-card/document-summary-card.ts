import { Component, inject } from '@angular/core';
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

@Component({
  selector: 'app-document-summary-card',
  imports: [NgIcon],
  templateUrl: './document-summary-card.html',
  styleUrl: './document-summary-card.css',
})
export class DocumentSummaryCard {
  public lucideBadgePercent = lucideBadgePercent;
  public lucideTruck = lucideTruck;
  public lucideTicketPercent = lucideTicketPercent;
  public lucideChevronRight = lucideChevronRight;

  private dialogService = inject(HlmDialogService);

  public openDiscountForm = () => {
    this.dialogService.open(DocumentDiscountForm, {
      closeOnBackdropClick: false,
    });
  };

  public openTaxForm = () => {
    this.dialogService.open(DocumentTaxForm, {
      closeOnBackdropClick: false,
    });
  };

  public openShippingForm = () => {
    this.dialogService.open(DocumentShippingForm, {
      closeOnBackdropClick: false,
    });
  };
}
