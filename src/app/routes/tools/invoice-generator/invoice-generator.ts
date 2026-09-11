import { Component, inject, OnInit } from '@angular/core';
import { StorePromo } from '@billinox/src/app/components/shared/store-promo/store-promo';
import { invoiceTemplates } from '@billinox/src/app/data/template.data';
import { DocumentStateDataModel } from '@billinox/src/app/models/document.model';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import generateDocumentNo from '@billinox/src/app/utils/generate-document-no';
import { NgIcon } from '@ng-icons/core';
import { lucideCloudDownload, lucideSend } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { DateTime } from 'luxon';
import { DocumentTemplateSelector } from '../components/document-editor/components/document-template-selector/document-template-selector';
import { DocumentEditor } from '../components/document-editor/document-editor';
import { ToolLayout } from '../components/tool-layout/tool-layout';
import { currencies } from '@billinox/src/app/data/currency.data';

@Component({
  selector: 'app-invoice-generator',
  imports: [
    ToolLayout,
    DocumentEditor,
    HlmButton,
    StorePromo,
    NgIcon,
    DocumentTemplateSelector,
  ],
  templateUrl: './invoice-generator.html',
  styleUrl: './invoice-generator.css',
})
export class InvoiceGenerator implements OnInit {
  public lucideSend = lucideSend;
  public lucideCloudDownload = lucideCloudDownload;
  public templates = invoiceTemplates;

  private documentStateService = inject(DocumentStateService);

  ngOnInit(): void {
    this.documentStateService.reset(
      new DocumentStateDataModel(
        invoiceTemplates[0],
        'INVOICE',
        DateTime.now().toJSDate(),
        DateTime.now().plus({ days: 2 }).toJSDate(),
        generateDocumentNo(),
        0,
        0,
        currencies['USD'],
      ),
    );
  }
}
