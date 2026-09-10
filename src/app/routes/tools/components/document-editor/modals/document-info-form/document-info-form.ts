import { Component } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmDialogHeader } from '@billinox/src/app/components/uis/dialog/src';
import {
  HlmDatePickerImports,
  provideHlmDatePickerConfig,
} from '@spartan-ng/helm/date-picker';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { DateTime } from 'luxon';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-document-info-form',
  imports: [
    HlmInput,
    HlmButton,
    HlmDialogHeader,
    HlmDatePickerImports,
    HlmFieldImports,
    ReactiveFormsModule,
  ],
  templateUrl: './document-info-form.html',
  styleUrl: './document-info-form.css',
  providers: [
    provideHlmDatePickerConfig({
      formatDate: (date: Date) =>
        DateTime.fromJSDate(date).toFormat('dd.MM.yyyy'),
      transformDate: (date: Date) =>
        DateTime.fromJSDate(date).plus({ days: 1 }).toJSDate(),
    }),
  ],
})
export class DocumentInfoForm {
  public minDate = DateTime.now().minus({ years: 3 }).toJSDate();
  public maxDate = DateTime.now().toJSDate();

  public get minDueDate() {
    return this.minDate;
  }

  public maxDueDate = DateTime.now().plus({ year: 1 }).toJSDate();

  public infoForm = new FormGroup({
    title: new FormControl(''),
    documentNo: new FormControl(''),
    issueDate: new FormControl<Date | null>(null),
    dueDate: new FormControl<Date | null>(null),
  });
}
