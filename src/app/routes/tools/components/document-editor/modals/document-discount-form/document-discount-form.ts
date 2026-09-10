import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HlmDialogHeader } from '@billinox/src/app/components/uis/dialog/src';
import { HlmFieldImports } from '@billinox/src/app/components/uis/field/src';
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
export class DocumentDiscountForm {
  public discountForm = new FormGroup({
    percent: new FormControl(0),
  });
}
