import { NgClass, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  Signal,
} from '@angular/core';
import { templates } from '@billinox/src/app/data/template.data';
import { themes } from '@billinox/src/app/data/themes.data';
import {
  DocumentStateDataModel,
  DocumentTemplateModel,
} from '@billinox/src/app/models/document.model';
import { SafeHtmlPipe } from '@billinox/src/app/pipes/safe-html-pipe';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import { environment } from '@billinox/src/environments/environment';

@Component({
  selector: 'app-document-template-selector',
  imports: [NgTemplateOutlet, NgClass, SafeHtmlPipe],
  templateUrl: './document-template-selector.html',
  styleUrl: './document-template-selector.css',
})
export class DocumentTemplateSelector implements OnInit {
  public playStore = environment.playStore;
  public templates = templates;
  public state!: Signal<DocumentStateDataModel>;

  private _documentStateService = inject(DocumentStateService);

  ngOnInit(): void {
    this.state = this._documentStateService.state;
  }

  select(template: DocumentTemplateModel) {
    const state = this.state();
    const themeData = themes[state.template.theme.primaryColor];
    const themeType = template.theme.type;
    this._documentStateService.saveTemplate({
      ...template,
      theme: themeData[themeType],
    });
  }
}
