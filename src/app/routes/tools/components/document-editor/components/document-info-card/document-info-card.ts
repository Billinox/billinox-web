import { Component, inject, OnInit, Signal } from '@angular/core';
import { HlmDialogService } from '@billinox/src/app/components/uis/dialog/src';
import { NgIcon } from '@ng-icons/core';
import { lucideChevronRight } from '@ng-icons/lucide';
import { DocumentInfoForm } from '../../modals/document-info-form/document-info-form';
import { DocumentStateDataModel } from '@billinox/src/app/models/document.model';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-document-info-card',
  imports: [NgIcon, DatePipe],
  templateUrl: './document-info-card.html',
  styleUrl: './document-info-card.css',
})
export class DocumentInfoCard implements OnInit {
  public lucideChevronRight = lucideChevronRight;
  public state!: Signal<DocumentStateDataModel>;

  private _dialogService = inject(HlmDialogService);
  private _documentStateService = inject(DocumentStateService);

  ngOnInit(): void {
    this.state = this._documentStateService.state;
  }

  public openForm() {
    this._dialogService.open(DocumentInfoForm, { closeOnBackdropClick: false });
  }
}
