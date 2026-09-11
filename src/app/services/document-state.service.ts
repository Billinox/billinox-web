import { computed, Injectable, signal } from '@angular/core';
import { DateTime } from 'luxon';
import { invoiceTemplates } from '../data/template.data';
import {
  DocumentBusinessData,
  DocumentCustomerData,
  DocumentItemData,
  DocumentStateDataModel,
} from '../models/document.model';
import generateDocumentNo from '../utils/generate-document-no';
import { currencies } from '../data/currency.data';

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

  public saveDiscount(discount: number) {
    this._state.update((value) => value.copyWith({ discount }));
  }
}
