import { Component, inject, OnInit } from '@angular/core';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmDialogHeader } from '@billinox/src/app/components/uis/dialog/src';
import {
  HlmDatePickerImports,
  provideHlmDatePickerConfig,
} from '@spartan-ng/helm/date-picker';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HlmButton } from '@spartan-ng/helm/button';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import { BrnDialogRef } from '@spartan-ng/brain/dialog';
import { DatePipe } from '@angular/common';
import { addYears, subYears } from 'date-fns';

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
        new DatePipe('en').transform(date, 'MMM d, y') ?? '',
      // transformDate: (date: Date) =>
      //   DateTime.fromJSDate(date).plus({ days: 1 }).toJSDate(),
    }),
  ],
})
export class DocumentInfoForm implements OnInit {
  public minDate = subYears(new Date(), 3);
  public maxDate = new Date();

  public get minDueDate() {
    return this.minDate;
  }

  public maxDueDate = addYears(new Date(), 1);

  public infoForm = new FormGroup({
    title: new FormControl('', [Validators.maxLength(10), Validators.required]),
    documentNo: new FormControl('', [Validators.required]),
    issueDate: new FormControl<Date | null>(null, [Validators.required]),
    dueDate: new FormControl<Date | null>(null, [Validators.required]),
  });

  private _documentStateService = inject(DocumentStateService);

  private readonly _dialogRef =
    inject<BrnDialogRef<DocumentInfoForm>>(BrnDialogRef);

  ngOnInit(): void {
    const state = this._documentStateService.state();
    this.infoForm.patchValue({
      documentNo: state.documentNo,
      dueDate: state.dueDate,
      issueDate: state.issuedDate,
      title: state.title,
    });
  }

  save() {
    if (this.infoForm.invalid) {
      this.infoForm.markAllAsTouched();
      return;
    }

    const formData = this.infoForm.value;
    this._documentStateService.saveInfo({
      documentNo: formData.documentNo!,
      dueDate: formData.dueDate!,
      issuedDate: formData.issueDate!,
      title: formData.title!,
    });

    this._dialogRef.close();
  }
}
