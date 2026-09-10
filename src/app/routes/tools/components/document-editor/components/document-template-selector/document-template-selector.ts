import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-document-template-selector',
  imports: [NgTemplateOutlet, NgClass],
  templateUrl: './document-template-selector.html',
  styleUrl: './document-template-selector.css',
})
export class DocumentTemplateSelector {
  @Input() templates!: DocumentTemplateModel[];
  @Input() selected?: DocumentTemplateModel;
}
