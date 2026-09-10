import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HlmDialogHeader } from '@billinox/src/app/components/uis/dialog/src';
import { HlmFieldImports } from '@billinox/src/app/components/uis/field/src';
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
export class DocumentShippingForm {
  public shippingForm = new FormGroup({
    amount: new FormControl(0, [Validators.min(0)]),
  });
}
