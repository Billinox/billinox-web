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
  selector: 'app-document-shipping-form',
  imports: [
    HlmFieldImports,
    HlmDialogHeader,
    HlmButton,
    HlmInput,
    ReactiveFormsModule,
  ],
  templateUrl: './document-shipping-form.html',
  styleUrl: './document-shipping-form.css',
})
export class DocumentShippingForm implements OnInit {
  public shippingForm = new FormGroup({
    amount: new FormControl(0, [Validators.min(0)]),
  });

  private readonly _documentStateService = inject(DocumentStateService);
  private readonly _dialogRef =
    inject<BrnDialogRef<DocumentShippingForm>>(BrnDialogRef);

  ngOnInit(): void {
    const state = this._documentStateService.state();
    this.shippingForm.patchValue({
      amount: state.shippingCost,
    });
  }

  public save() {
    if (this.shippingForm.invalid) {
      this.shippingForm.markAllAsTouched();
      return;
    }

    const formData = this.shippingForm.value;
    this._documentStateService.saveShipping(formData.amount!);
    this._dialogRef.close();
  }
}
