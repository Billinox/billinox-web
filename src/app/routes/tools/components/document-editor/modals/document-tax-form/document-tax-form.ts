import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  HlmDialogHeader,
  HlmDialogFooter,
} from '@billinox/src/app/components/uis/dialog/src';
import { HlmFieldImports } from '@billinox/src/app/components/uis/field/src';
import { DocumentTaxData } from '@billinox/src/app/models/document.model';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import { BrnDialogRef, injectBrnDialogContext } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';

@Component({
  selector: 'app-document-tax-form',
  imports: [
    HlmDialogHeader,
    HlmInput,
    HlmFieldImports,
    HlmButton,
    ReactiveFormsModule,
    HlmDialogFooter,
  ],
  templateUrl: './document-tax-form.html',
  styleUrl: './document-tax-form.css',
})
export class DocumentTaxForm {
  public taxForm = new FormGroup({
    name: new FormControl(''),
    percent: new FormControl(0, [Validators.min(0), Validators.max(100)]),
  });

  private readonly _documentStateService = inject(DocumentStateService);
  private readonly _dialogRef =
    inject<BrnDialogRef<DocumentTaxForm>>(BrnDialogRef);
  private readonly _dialogContext = injectBrnDialogContext<{
    tax?: DocumentTaxData;
    index?: number;
  }>();

  get tax() {
    return this._dialogContext.tax;
  }

  get index() {
    return this._dialogContext.index;
  }

  ngOnInit(): void {
    const tax = this._dialogContext.tax;
    if (tax) {
      this.taxForm.patchValue({
        name: tax.name,
        percent: tax.percentage,
      });
    }
  }

  save() {
    if (this.taxForm.invalid) {
      this.taxForm.markAllAsTouched();
      return;
    }

    const formData = this.taxForm.value;
    this._documentStateService.saveTax({
      tax: new DocumentTaxData(formData.name!, formData.percent!),
      index: this._dialogContext.index,
    });
    this._dialogRef.close();
  }

  remove() {
    this._documentStateService.removeTax(this.index!);
    this._dialogRef.close();
  }
}
