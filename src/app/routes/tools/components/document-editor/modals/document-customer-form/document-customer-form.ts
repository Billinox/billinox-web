import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HlmDialogHeader } from '@billinox/src/app/components/uis/dialog/src';
import { HlmFieldImports } from '@billinox/src/app/components/uis/field/src';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import { BrnDialogRef } from '@spartan-ng/brain/dialog';
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
export class DocumentCustomerForm implements OnInit {
  public customerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    phone: new FormControl(''),
    address: new FormControl(''),
  });

  private readonly _documentStateService = inject(DocumentStateService);

  private readonly _dialogRef =
    inject<BrnDialogRef<DocumentCustomerForm>>(BrnDialogRef);

  ngOnInit(): void {
    const state = this._documentStateService.state();
    this.customerForm.patchValue({
      address: state.customer?.address,
      email: state.customer?.email,
      name: state.customer?.name,
      phone: state.customer?.phone,
    });
  }

  save() {
    if (this.customerForm.invalid) {
      this.customerForm.markAllAsTouched();
      return;
    }

    const formData = this.customerForm.value;
    this._documentStateService.saveCustomer({
      address: formData.address,
      email: formData.email,
      name: formData.name!,
      phone: formData.phone,
    });

    this._dialogRef.close();
  }
}
