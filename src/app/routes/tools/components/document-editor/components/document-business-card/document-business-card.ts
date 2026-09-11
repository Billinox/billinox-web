import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, OnInit, Signal } from '@angular/core';
import { HlmDialogService } from '@billinox/src/app/components/uis/dialog/src';
import { NgIcon } from '@ng-icons/core';
import {
  lucideChevronRight,
  lucideIdCard,
  lucideUsers,
} from '@ng-icons/lucide';
import { DocumentBusinessForm } from '../../modals/document-business-form/document-business-form';
import { DocumentCustomerForm } from '../../modals/document-customer-form/document-customer-form';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import { DocumentStateDataModel } from '@billinox/src/app/models/document.model';

@Component({
  selector: 'app-document-business-card',
  imports: [NgIcon, NgTemplateOutlet],
  templateUrl: './document-business-card.html',
  styleUrl: './document-business-card.css',
})
export class DocumentBusinessCard implements OnInit {
  public lucideIdCard = lucideIdCard;
  public lucideChevronRight = lucideChevronRight;
  public lucideUsers = lucideUsers;
  public state!: Signal<DocumentStateDataModel>;

  private dialogService = inject(HlmDialogService);

  private _documentStateService = inject(DocumentStateService);

  ngOnInit(): void {
    this.state = this._documentStateService.state;
  }

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
