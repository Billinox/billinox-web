import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HlmDialogHeader } from '@billinox/src/app/components/uis/dialog/src';
import { HlmFieldImports } from '@billinox/src/app/components/uis/field/src';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmTextarea } from '@spartan-ng/helm/textarea';

@Component({
  selector: 'app-document-item-form',
  imports: [
    ReactiveFormsModule,
    HlmInput,
    HlmTextarea,
    HlmButton,
    HlmFieldImports,
    HlmDialogHeader,
  ],
  templateUrl: './document-item-form.html',
  styleUrl: './document-item-form.css',
})
export class DocumentItemForm {
  public itemForm = new FormGroup({
    description: new FormControl(''),
    price: new FormControl<number>(0),
    quantity: new FormControl<number>(0),
  });
}
