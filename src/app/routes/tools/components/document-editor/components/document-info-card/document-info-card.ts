import { Component, inject } from '@angular/core';
import { HlmDialogService } from '@billinox/src/app/components/uis/dialog/src';
import { NgIcon } from '@ng-icons/core';
import { lucideChevronRight } from '@ng-icons/lucide';
import { DocumentInfoForm } from '../../modals/document-info-form/document-info-form';

@Component({
  selector: 'app-document-info-card',
  imports: [NgIcon],
  templateUrl: './document-info-card.html',
  styleUrl: './document-info-card.css',
})
export class DocumentInfoCard {
  public lucideChevronRight = lucideChevronRight;

  private dialogService = inject(HlmDialogService);

  public openForm() {
    this.dialogService.open(DocumentInfoForm, { closeOnBackdropClick: false });
  }
}
