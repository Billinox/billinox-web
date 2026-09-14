import { PointGroup } from 'signature_pad';
import { CurrencyModel } from './currency.model';
import { ThemeColor, ThemeType } from '../data/themes.data';

export interface DocumentTemplateTheme {
  primaryColor: ThemeColor;
  background: { type: 'color' | 'image'; value: string };
  table: {
    headerBackgroundColor: string;
    headerTextColor: string;
    totalBackgroundColor?: string;
    totalTextColor?: string;
  };
  template: string;
  type: ThemeType;
}

export interface DocumentTemplateModel {
  id: string;
  thumbnail: string;
  name: string;
  theme: DocumentTemplateTheme;
  type: 'modernX' | 'modern' | 'simple';
}

export interface DocumentBusinessData {
  name: string;
  username: string;
  phone: string;
  email: string;
  address: string;
  logo: string;
}

export interface DocumentCustomerData {
  name: string;
  email: string | null | undefined;
  phone: string | null | undefined;
  address: string | null | undefined;
}

export interface DocumentSignatureData {
  label: string;
  image: string;
  points: PointGroup[];
}

export class DocumentTaxData {
  constructor(
    public readonly name: string,
    public readonly percentage: number,
  ) {}

  public copyWith(name?: string, percentage?: number): DocumentTaxData {
    return new DocumentTaxData(
      name ?? this.name,
      percentage ?? this.percentage,
    );
  }
}

export class DocumentItemData {
  public get subtotal() {
    return this.quantity * this.price;
  }

  constructor(
    public readonly description: string,
    public readonly quantity: number,
    public readonly price: number,
  ) {}

  public copyWith(
    description?: string,
    quantity?: number,
    price?: number,
  ): DocumentItemData {
    return new DocumentItemData(
      description ?? this.description,
      quantity ?? this.quantity,
      price ?? this.price,
    );
  }
}

export class DocumentStateDataModel {
  public get discountAmount() {
    return Number((this.subtotal * (this.discount / 100)).toFixed(2));
  }

  public get taxAmount() {
    return this.taxes.reduce(
      (total, value) =>
        Number((this.subtotal * (value.percentage / 100)).toFixed(2)) + total,
      0,
    );
  }

  public get subtotal() {
    return this.items.reduce((total, value) => value.subtotal + total, 0);
  }

  public get total() {
    return (
      this.subtotal + this.shippingCost + this.taxAmount - this.discountAmount
    );
  }

  constructor(
    public readonly template: DocumentTemplateModel,
    public readonly title: string,
    public readonly issuedDate: Date,
    public readonly dueDate: Date,
    public readonly documentNo: string,
    public readonly discount: number,
    public readonly shippingCost: number,
    public readonly currency: CurrencyModel,
    public readonly business?: DocumentBusinessData,
    public readonly customer?: DocumentCustomerData,
    public readonly signature?: DocumentSignatureData,
    public readonly paymentAccount?: {
      description: string;
    },
    public readonly items: DocumentItemData[] = [],
    public readonly terms: string[] = [],
    public readonly taxes: DocumentTaxData[] = [],
  ) {}

  public copyWith({
    business,
    customer,
    discount,
    documentNo,
    dueDate,
    issuedDate,
    items,
    paymentAccount,
    shippingCost,
    signature,
    taxes,
    template,
    terms,
    title,
    currency,
  }: {
    template?: DocumentTemplateModel;
    title?: string;
    issuedDate?: Date;
    dueDate?: Date;
    documentNo?: string;
    discount?: number;
    shippingCost?: number;
    currency?: CurrencyModel;
    business?: DocumentBusinessData;
    customer?: DocumentCustomerData;
    signature?: DocumentSignatureData | null;
    paymentAccount?: {
      description: string;
    };
    items?: DocumentItemData[];
    terms?: string[];
    taxes?: DocumentTaxData[];
  }): DocumentStateDataModel {
    return new DocumentStateDataModel(
      template ?? this.template,
      title ?? this.title,
      issuedDate ?? this.issuedDate,
      dueDate ?? this.dueDate,
      documentNo ?? this.documentNo,
      discount ?? this.discount,
      shippingCost ?? this.shippingCost,
      currency ?? this.currency,
      business ?? this.business,
      customer ?? this.customer,
      signature ?? this.signature,
      paymentAccount ?? this.paymentAccount,
      items ?? this.items,
      terms ?? this.terms,
      taxes ?? this.taxes,
    );
  }
}
