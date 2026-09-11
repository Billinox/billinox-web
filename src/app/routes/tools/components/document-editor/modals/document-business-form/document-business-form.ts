import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HlmDialogHeader } from '@billinox/src/app/components/uis/dialog/src';
import { HlmFieldImports } from '@billinox/src/app/components/uis/field/src';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import { NgIcon } from '@ng-icons/core';
import { lucideCamera } from '@ng-icons/lucide';
import { BrnDialogRef } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmTextarea } from '@spartan-ng/helm/textarea';

@Component({
  selector: 'app-document-business-form',
  imports: [
    HlmDialogHeader,
    HlmButton,
    HlmFieldImports,
    HlmInput,
    HlmTextarea,
    NgIcon,
    ReactiveFormsModule,
  ],
  templateUrl: './document-business-form.html',
  styleUrl: './document-business-form.css',
})
export class DocumentBusinessForm implements OnInit {
  public businessForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    logo: new FormControl<string | null>(null),
  });
  public lucideCamera = lucideCamera;

  public get fc() {
    return this.businessForm.controls;
  }

  public get logo() {
    return this.fc.logo.value;
  }

  private readonly _cdr = inject(ChangeDetectorRef);

  private readonly _documentStateService = inject(DocumentStateService);

  private readonly _dialogRef =
    inject<BrnDialogRef<DocumentBusinessForm>>(BrnDialogRef);

  ngOnInit(): void {
    const state = this._documentStateService.state();

    this.businessForm.patchValue({
      address: state.business?.address,
      email: state.business?.email,
      logo: state.business?.logo,
      name: state.business?.name,
      phone: state.business?.phone,
      username: state.business?.username,
    });
  }

  public updateLogo(event: any) {
    const file: Blob = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (data) => {
      this.businessForm.controls.logo.patchValue(data.target?.result as string);
      this._cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }

  public resetLogo() {
    this.businessForm.controls.logo.patchValue(null);
  }

  public save() {
    if (this.businessForm.invalid) {
      this.businessForm.markAllAsTouched();
      return;
    }

    const formData = this.businessForm.value;
    this._documentStateService.saveBusiness({
      address: formData.address!,
      email: formData.email!,
      logo: formData.logo!,
      name: formData.name!,
      phone: formData.phone!,
      username: formData.username!,
    });

    this._dialogRef.close();
  }
}
