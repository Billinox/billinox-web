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
import { HlmTextarea } from '@spartan-ng/helm/textarea';

@Component({
  selector: 'app-document-customer-form',
  imports: [
    ReactiveFormsModule,
    HlmInput,
    HlmTextarea,
    HlmFieldImports,
    HlmDialogHeader,
    HlmButton,
  ],
  templateUrl: './document-customer-form.html',
  styleUrl: './document-customer-form.css',
})
export class DocumentCustomerForm {
  public customerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });
}
