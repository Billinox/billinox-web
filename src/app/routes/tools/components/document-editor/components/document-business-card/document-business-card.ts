import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HlmDialogService } from '@billinox/src/app/components/uis/dialog/src';
import { NgIcon } from '@ng-icons/core';
import {
  lucideChevronRight,
  lucideIdCard,
  lucideUsers,
} from '@ng-icons/lucide';
import { DocumentBusinessForm } from '../../modals/document-business-form/document-business-form';
import { DocumentCustomerForm } from '../../modals/document-customer-form/document-customer-form';

@Component({
  selector: 'app-document-business-card',
  imports: [NgIcon, NgTemplateOutlet],
  templateUrl: './document-business-card.html',
  styleUrl: './document-business-card.css',
})
export class DocumentBusinessCard {
  public lucideIdCard = lucideIdCard;
  public lucideChevronRight = lucideChevronRight;
  public lucideUsers = lucideUsers;

  private dialogService = inject(HlmDialogService);

  public openBusinessForm = () => {
    this.dialogService.open(DocumentBusinessForm, {
      closeOnBackdropClick: false,
    });
  };

  public openCustomerForm = () => {
    this.dialogService.open(DocumentCustomerForm, {
      closeOnBackdropClick: false,
    });
  };
}
