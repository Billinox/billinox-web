import { Component } from '@angular/core';
import { DocumentInfoCard } from './components/document-info-card/document-info-card';
import { DocumentBusinessCard } from './components/document-business-card/document-business-card';
import { DocumentItemsCard } from './components/document-items-card/document-items-card';
import { DocumentSummaryCard } from './components/document-summary-card/document-summary-card';
import { DocumentMetaCard } from './components/document-meta-card/document-meta-card';

@Component({
  selector: 'app-document-editor',
  imports: [
    DocumentInfoCard,
    DocumentBusinessCard,
    DocumentItemsCard,
    DocumentSummaryCard,
    DocumentMetaCard,
  ],
  templateUrl: './document-editor.html',
  styleUrl: './document-editor.css',
})
export class DocumentEditor {}
