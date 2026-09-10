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
  selector: 'app-document-tax-form',
  imports: [
    HlmDialogHeader,
    HlmInput,
    HlmFieldImports,
    HlmButton,
    ReactiveFormsModule,
  ],
  templateUrl: './document-tax-form.html',
  styleUrl: './document-tax-form.css',
})
export class DocumentTaxForm {
  public taxForm = new FormGroup({
    name: new FormControl(''),
    percent: new FormControl(0, [Validators.min(0), Validators.max(100)]),
  });
}
