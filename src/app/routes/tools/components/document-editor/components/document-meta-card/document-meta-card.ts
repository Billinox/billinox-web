import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HlmDialogService } from '@billinox/src/app/components/uis/dialog/src';
import { NgIcon } from '@ng-icons/core';
import {
  lucideBanknote,
  lucideChevronRight,
  lucideCreditCard,
  lucideNotepadText,
  lucideSignature,
  lucideStickyNote,
} from '@ng-icons/lucide';
import { DocumentPaymentMethodForm } from '../../modals/document-payment-method-form/document-payment-method-form';
import { DocumentTermForm } from '../../modals/document-term-form/document-term-form';
import { DocumentSignatureForm } from '../../modals/document-signature-form/document-signature-form';
import { DocumentCurrencySelector } from '../../modals/document-currency-selector/document-currency-selector';

@Component({
  selector: 'app-document-meta-card',
  imports: [NgIcon, NgTemplateOutlet],
  templateUrl: './document-meta-card.html',
  styleUrl: './document-meta-card.css',
})
export class DocumentMetaCard {
  public lucideBanknote = lucideBanknote;
  public lucideCreditCard = lucideCreditCard;
  public lucideSignature = lucideSignature;
  public lucideNotepadText = lucideNotepadText;
  public lucideChevronRight = lucideChevronRight;

  private dialogService = inject(HlmDialogService);

  public toggleCurrency = () => {
    this.dialogService.open(DocumentCurrencySelector, {
      closeOnBackdropClick: false,
    });
  };

  public togglePayment = () => {
    this.dialogService.open(DocumentPaymentMethodForm, {
      closeOnBackdropClick: false,
    });
  };

  public toggleSignature = () => {
    this.dialogService.open(DocumentSignatureForm, {
      closeOnBackdropClick: false,
    });
  };

  public toggleTerms = () => {
    this.dialogService.open(DocumentTermForm, {
      closeOnBackdropClick: false,
    });
  };
}
