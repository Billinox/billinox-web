import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HlmDialogHeader } from '@billinox/src/app/components/uis/dialog/src';
import { HlmFieldImports } from '@billinox/src/app/components/uis/field/src';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import { BrnDialogRef, injectBrnDialogContext } from '@spartan-ng/brain/dialog';
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
export class DocumentTermForm implements OnInit {
  public termForm = new FormGroup({
    description: new FormControl<string | null>(null, [Validators.required]),
  });

  private readonly _documentStateService = inject(DocumentStateService);
  private readonly _dialogRef =
    inject<BrnDialogRef<DocumentTermForm>>(BrnDialogRef);
  private readonly _dialogContext = injectBrnDialogContext<{
    term?: string;
    index?: number;
  }>();

  ngOnInit(): void {
    const description = this._dialogContext.term;
    if (description) {
      this.termForm.patchValue({
        description
      });
    }
  }

  save() {
    if (this.termForm.invalid) {
      this.termForm.markAllAsTouched();
      return;
    }

    const formData = this.termForm.value;
    this._documentStateService.saveTerm({ term: formData.description!, index: this._dialogContext.index });
    this._dialogRef.close();
  }
}
