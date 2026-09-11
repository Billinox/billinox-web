import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HlmDialogHeader } from '@billinox/src/app/components/uis/dialog/src';
import { HlmFieldImports } from '@billinox/src/app/components/uis/field/src';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import { BrnDialogRef } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';

@Component({
  selector: 'app-document-discount-form',
  imports: [
    HlmDialogHeader,
    HlmInput,
    HlmFieldImports,
    HlmButton,
    ReactiveFormsModule,
  ],
  templateUrl: './document-discount-form.html',
  styleUrl: './document-discount-form.css',
})
export class DocumentDiscountForm implements OnInit {
  public discountForm = new FormGroup({
    percent: new FormControl(0, [Validators.min(0), Validators.max(100)]),
  });

  private readonly _documentStateService = inject(DocumentStateService);

  private readonly _dialogRef =
    inject<BrnDialogRef<DocumentDiscountForm>>(BrnDialogRef);

  ngOnInit(): void {
    const state = this._documentStateService.state();
    this.discountForm.patchValue({
      percent: state.discount,
    });
  }

  save() {
    if (this.discountForm.invalid) {
      this.discountForm.markAllAsTouched();
      return;
    }

    const formData = this.discountForm.value;
    this._documentStateService.saveDiscount(formData.percent!);
    this._dialogRef.close();
  }
}
