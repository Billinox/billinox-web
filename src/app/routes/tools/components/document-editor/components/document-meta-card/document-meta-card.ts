import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import {
  lucideBanknote,
  lucideChevronRight,
  lucideCreditCard,
  lucideSignature,
  lucideStickyNote,
} from '@ng-icons/lucide';

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
  public lucideStickyNote = lucideStickyNote;
  public lucideChevronRight = lucideChevronRight;

  public toggleCurrency() {}

  public togglePayment() {}

  public toggleSignature() {}

  public toggleTerms() {}
}
