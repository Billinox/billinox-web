import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HlmDialogHeader } from '@billinox/src/app/components/uis/dialog/src';
import { HlmFieldImports } from '@billinox/src/app/components/uis/field/src';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmTextarea } from '@spartan-ng/helm/textarea';

@Component({
  selector: 'app-document-payment-method-form',
  imports: [
    HlmButton,
    HlmFieldImports,
    HlmInput,
    HlmDialogHeader,
    HlmTextarea,
    ReactiveFormsModule,
  ],
  templateUrl: './document-payment-method-form.html',
  styleUrl: './document-payment-method-form.css',
})
export class DocumentPaymentMethodForm {
  public methodForm = new FormGroup({
    description: new FormControl<string | null>(null),
  });
}
