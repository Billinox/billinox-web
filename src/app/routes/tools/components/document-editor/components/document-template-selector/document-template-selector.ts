import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DocumentTemplateModel } from '@billinox/src/app/models/document.model';
import { environment } from '@billinox/src/environments/environment';

@Component({
  selector: 'app-document-template-selector',
  imports: [NgTemplateOutlet, NgClass],
  templateUrl: './document-template-selector.html',
  styleUrl: './document-template-selector.css',
})
export class DocumentTemplateSelector {
  @Input() templates!: DocumentTemplateModel[];
  @Input() selected?: DocumentTemplateModel;
  @Output() onSelect = new EventEmitter<DocumentTemplateModel>();

  public playStore = environment.playStore

  select(selected: DocumentTemplateModel) {
    this.onSelect.emit(selected);
  }
}
