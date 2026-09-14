import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  Signal,
} from '@angular/core';
import {
  ThemeColor,
  themeColors,
  themes,
} from '@billinox/src/app/data/themes.data';
import { DocumentStateDataModel } from '@billinox/src/app/models/document.model';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import { NgIcon } from '@ng-icons/core';
import { lucideCheck } from '@ng-icons/lucide';

@Component({
  selector: 'app-document-theme-selector',
  imports: [NgIcon],
  templateUrl: './document-theme-selector.html',
  styleUrl: './document-theme-selector.css',
})
export class DocumentThemeSelector implements OnInit {
  public colors = themeColors;
  public lucideCheck = lucideCheck;
  public state!: Signal<DocumentStateDataModel>;

  private _documentStateService = inject(DocumentStateService);

  get selected() {
    return this.state().template.theme.primaryColor;
  }

  ngOnInit(): void {
    this.state = this._documentStateService.state;
  }

  select(color: ThemeColor) {
    const state = this.state();
    const themeData = themes[color];
    const themeType = state.template.theme.type;
    this._documentStateService.saveTheme(themeData[themeType]);
  }
}
