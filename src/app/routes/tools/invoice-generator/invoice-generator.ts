import { Component, inject, OnInit, Signal } from '@angular/core';
import { StorePromo } from '@billinox/src/app/components/shared/store-promo/store-promo';
import { invoiceTemplates } from '@billinox/src/app/data/template.data';
import { DocumentStateDataModel, DocumentTemplateModel } from '@billinox/src/app/models/document.model';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import generateDocumentNo from '@billinox/src/app/utils/generate-document-no';
import { HlmButton } from '@spartan-ng/helm/button';
import { DateTime } from 'luxon';
import { DocumentTemplateSelector } from '../components/document-editor/components/document-template-selector/document-template-selector';
import { DocumentEditor } from '../components/document-editor/document-editor';
import { ToolLayout } from '../components/tool-layout/tool-layout';
import { currencies } from '@billinox/src/app/data/currency.data';
import { DocumentCTA } from '../components/document-cta/document-cta';

@Component({
  selector: 'app-invoice-generator',
  imports: [
    ToolLayout,
    DocumentEditor,
    StorePromo,
    DocumentTemplateSelector,
    DocumentCTA
  ],
  templateUrl: './invoice-generator.html',
  styleUrl: './invoice-generator.css',
})
export class InvoiceGenerator implements OnInit {
  public templates = invoiceTemplates;
  public state!: Signal<DocumentStateDataModel>;

  private _documentStateService = inject(DocumentStateService);

  ngOnInit(): void {
    this._documentStateService.reset(
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
    this.state = this._documentStateService.state;
  }

  selectTemplate(template: DocumentTemplateModel) {
    this._documentStateService.saveTemplate(template);
  }
}
