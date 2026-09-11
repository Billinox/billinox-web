import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HlmDialogHeader } from '@billinox/src/app/components/uis/dialog/src';
import { HlmFieldImports } from '@billinox/src/app/components/uis/field/src';
import { DocumentItemData } from '@billinox/src/app/models/document.model';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import { BrnDialogRef, injectBrnDialogContext } from '@spartan-ng/brain/dialog';
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
export class DocumentItemForm implements OnInit {
  public itemForm = new FormGroup({
    description: new FormControl('', [
      Validators.maxLength(250),
      Validators.required,
    ]),
    price: new FormControl<number>(0, [Validators.min(0), Validators.required]),
    quantity: new FormControl<number>(1, [
      Validators.min(1),
      Validators.required,
    ]),
  });

  private readonly _documentStateService = inject(DocumentStateService);
  private readonly _dialogRef =
    inject<BrnDialogRef<DocumentItemForm>>(BrnDialogRef);
  private readonly _dialogContext = injectBrnDialogContext<{
    item?: DocumentItemData;
    index?: number;
  }>();

  ngOnInit(): void {
    const item = this._dialogContext.item;
    if (item) {
      this.itemForm.patchValue({
        description: item.description,
        price: item.price,
        quantity: item.quantity,
      });
    }
  }

  save() {
    if (this.itemForm.invalid) {
      this.itemForm.markAllAsTouched();
      return;
    }

    const formData = this.itemForm.value;
    this._documentStateService.saveItem({
      item: new DocumentItemData(
        formData.description!,
        formData.quantity!,
        formData.price!,
      ),
      index: this._dialogContext.index,
    });
    this._dialogRef.close();
  }
}
