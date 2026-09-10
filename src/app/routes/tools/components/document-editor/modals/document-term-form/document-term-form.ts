import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HlmDialogHeader } from '@billinox/src/app/components/uis/dialog/src';
import { HlmFieldImports } from '@billinox/src/app/components/uis/field/src';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmTextarea } from '@spartan-ng/helm/textarea';

@Component({
  selector: 'app-document-term-form',
  imports: [
    ReactiveFormsModule,
    HlmButton,
    HlmTextarea,
    HlmDialogHeader,
    HlmFieldImports,
  ],
  templateUrl: './document-term-form.html',
  styleUrl: './document-term-form.css',
})
export class DocumentTermForm {
  public termForm = new FormGroup({
    description: new FormControl<string | null>(null),
  });
}
