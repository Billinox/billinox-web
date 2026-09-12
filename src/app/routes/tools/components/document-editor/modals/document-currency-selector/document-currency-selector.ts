import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HlmDialogImports } from '@billinox/src/app/components/uis/dialog/src';
import { HlmFieldImports } from '@billinox/src/app/components/uis/field/src';
import { currencies } from '@billinox/src/app/data/currency.data';
import { CurrencyModel } from '@billinox/src/app/models/currency.model';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBanknote } from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { HlmComboboxImports } from '@spartan-ng/helm/combobox';
import { HlmInputGroupAddon } from '@billinox/src/app/components/uis/input-group/src';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import { BrnDialogRef } from '@spartan-ng/brain/dialog';

@Component({
  selector: 'app-document-currency-selector',
  imports: [
    HlmDialogImports,
    HlmSelectImports,
    HlmFieldImports,
    HlmComboboxImports,
    HlmInputGroupAddon,
    HlmButton,
    NgIcon,
    ReactiveFormsModule,
  ],
  templateUrl: './document-currency-selector.html',
  styleUrl: './document-currency-selector.css',
  providers: [provideIcons({ lucideBanknote })],
})
export class DocumentCurrencySelector implements OnInit {
  public currencyForm = new FormGroup({
    currency: new FormControl<CurrencyModel | null>(null),
  });
  public currencies = Object.values(currencies);

  public itemToString = (d: CurrencyModel) => `${d.code} - ${d.name}`;

  private readonly _documentStateService = inject(DocumentStateService);
  private readonly _dialogRef =
    inject<BrnDialogRef<DocumentCurrencySelector>>(BrnDialogRef);

  ngOnInit(): void {
    const state = this._documentStateService.state();
    this.currencyForm.patchValue({
      currency: state.currency
    })
  }

  save() {
    if (this.currencyForm.invalid) {
      this.currencyForm.markAllAsTouched();
      return;
    }

    const formData = this.currencyForm.value;
    this._documentStateService.saveCurrency(formData.currency!);
    this._dialogRef.close();
  }
}
