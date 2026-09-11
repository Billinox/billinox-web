import { Component } from '@angular/core';
import { ToolLayout } from '../components/tool-layout/tool-layout';
import { DocumentEditor } from '../components/document-editor/document-editor';
import { HlmButton } from '@spartan-ng/helm/button';
import { StorePromo } from '@billinox/src/app/components/shared/store-promo/store-promo';
import { lucideCloudDownload, lucideSend } from '@ng-icons/lucide';
import { NgIcon } from '@ng-icons/core';
import { DocumentTemplateSelector } from '../components/document-editor/components/document-template-selector/document-template-selector';
import { invoiceTemplates } from '@billinox/src/app/data/template.data';

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
export class InvoiceGenerator {
  public lucideSend = lucideSend;
  public lucideCloudDownload = lucideCloudDownload;
  public templates = invoiceTemplates;
}
