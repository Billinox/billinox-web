import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HlmDialogHeader } from '@billinox/src/app/components/uis/dialog/src';
import { HlmFieldImports } from '@billinox/src/app/components/uis/field/src';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import { BrnDialogRef } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmTextarea } from '@spartan-ng/helm/textarea';

@Component({
  selector: 'app-document-payment-method-form',
  imports: [
    HlmButton,
    HlmFieldImports,
    HlmDialogHeader,
    HlmTextarea,
    ReactiveFormsModule,
  ],
  templateUrl: './document-payment-method-form.html',
  styleUrl: './document-payment-method-form.css',
})
export class DocumentPaymentMethodForm {
  public methodForm = new FormGroup({
    description: new FormControl<string | null>(null, [Validators.required, Validators.minLength(10)]),
  });

  private readonly _documentStateService = inject(DocumentStateService);
  private readonly _dialogRef =
    inject<BrnDialogRef<DocumentPaymentMethodForm>>(BrnDialogRef);

  ngOnInit(): void {
    const state = this._documentStateService.state();
    this.methodForm.patchValue({
      description: state.paymentAccount?.description
    })
  }


  public save() {
    if (this.methodForm.invalid) {
      this.methodForm.markAllAsTouched();
      return;
    }

    const formData = this.methodForm.value;
    this._documentStateService.savePaymentAccount(formData.description!);
    this._dialogRef.close();
  }
}
