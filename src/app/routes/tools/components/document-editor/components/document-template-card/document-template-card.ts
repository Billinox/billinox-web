import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { lucideChevronRight, lucideNotebook } from '@ng-icons/lucide';

@Component({
  selector: 'app-document-template-card',
  imports: [NgIcon],
  templateUrl: './document-template-card.html',
  styleUrl: './document-template-card.css',
})
export class DocumentTemplateCard {
  public lucideNotebook = lucideNotebook;
  public lucideChevronRight = lucideChevronRight;
}
