import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, OnInit, Signal } from '@angular/core';
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
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import { DocumentStateDataModel } from '@billinox/src/app/models/document.model';

@Component({
  selector: 'app-document-meta-card',
  imports: [NgIcon, NgTemplateOutlet],
  templateUrl: './document-meta-card.html',
  styleUrl: './document-meta-card.css',
})
export class DocumentMetaCard implements OnInit {
  public lucideBanknote = lucideBanknote;
  public lucideCreditCard = lucideCreditCard;
  public lucideSignature = lucideSignature;
  public lucideNotepadText = lucideNotepadText;
  public lucideChevronRight = lucideChevronRight;
  public state!: Signal<DocumentStateDataModel>;

  private dialogService = inject(HlmDialogService);
  private _documentStateService = inject(DocumentStateService);

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

  public addOrEditTerm = (context?: { term: string, index: number }) => {
    this.dialogService.open(DocumentTermForm, {
      closeOnBackdropClick: false,
      context
    });
  };

  ngOnInit(): void {
    this.state = this._documentStateService.state;
  }
}
