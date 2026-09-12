import { computed, Injectable, signal } from '@angular/core';
import { DateTime } from 'luxon';
import { invoiceTemplates } from '../data/template.data';
import {
  DocumentBusinessData,
  DocumentCustomerData,
  DocumentItemData,
  DocumentSignatureData,
  DocumentStateDataModel,
  DocumentTaxData,
} from '../models/document.model';
import generateDocumentNo from '../utils/generate-document-no';
import { currencies } from '../data/currency.data';
import { CurrencyModel } from '../models/currency.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentStateService {
  public get state() {
    return this._state.asReadonly();
  }

  private _state = signal(
    new DocumentStateDataModel(
      invoiceTemplates[0],
      'INVOICE',
      DateTime.now().toJSDate(),
      DateTime.now().toJSDate(),
      generateDocumentNo(),
      0,
      0,
      currencies['USD'],
    ),
  );

  public reset(state: DocumentStateDataModel) {
    this._state.set(state);
  }

  public saveInfo({
    documentNo,
    dueDate,
    issuedDate,
    title,
  }: {
    documentNo: string;
    dueDate: Date;
    issuedDate: Date;
    title: string;
  }) {
    this._state.update((value) =>
      value.copyWith({ documentNo, dueDate, issuedDate, title }),
    );
  }

  public saveBusiness(business: DocumentBusinessData) {
    this._state.update((value) => value.copyWith({ business }));
  }

  public saveCustomer(customer: DocumentCustomerData) {
    this._state.update((value) => value.copyWith({ customer }));
  }

  public saveItem({ item, index }: { item: DocumentItemData; index?: number }) {
    this._state.update((value) => {
      let items: DocumentItemData[] = [...value.items];

      if (index !== null && index !== undefined) {
        items.splice(index, 1, item);
      } else {
        items.push(item);
      }

      return value.copyWith({ items });
    });
  }

  public removeItem(index: number) {
    this._state.update((value) =>
      value.copyWith({ items: value.items.filter((d, idx) => idx != index) }),
    );
  }

  public saveDiscount(discount: number) {
    this._state.update((value) => value.copyWith({ discount }));
  }

  public saveShipping(shippingCost: number) {
    this._state.update((value) => value.copyWith({ shippingCost }));
  }

  public saveTax({ tax, index }: { tax: DocumentTaxData; index?: number }) {
    this._state.update((value) => {
      let items: DocumentTaxData[] = [...value.taxes];

      if (index !== null && index !== undefined) {
        items.splice(index, 1, tax);
      } else {
        items.push(tax);
      }

      return value.copyWith({ taxes: items });
    });
  }

  public removeTax(index: number) {
    this._state.update((value) =>
      value.copyWith({ taxes: value.taxes.filter((d, idx) => idx != index) }),
    );
  }

  public saveTerm({ term, index }: { term: string; index?: number }) {
    this._state.update((value) => {
      let terms: string[] = [...value.terms];

      if (index !== null && index !== undefined) {
        terms.splice(index, 1, term);
      } else {
        terms.push(term);
      }

      return value.copyWith({ terms });
    });
  }

  public removeTerm(index: number) {
    this._state.update((value) =>
      value.copyWith({ terms: value.terms.filter((d, idx) => idx != index) }),
    );
  }

  public saveCurrency(currency: CurrencyModel) {
    this._state.update((value) => value.copyWith({ currency }));
  }

  public savePaymentAccount(description: string) {
    this._state.update((value) => value.copyWith({ paymentAccount: { description } }));
  }

  public saveSignature(signature: DocumentSignatureData) {
    this._state.update((value) => value.copyWith({ signature }));
  }

  public removeSignature() {
    this._state.update((value) => value.copyWith({ signature: null }));
  }
}
