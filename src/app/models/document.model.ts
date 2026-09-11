export interface DocumentTemplateTheme {
  primaryColor: string;
  background: { type: string; value: string };
  table: {
    headerBackgroundColor: string;
    headerTextColor: string;
    totalBackgroundColor?: string;
    totalTextColor?: string;
  };
}

export interface DocumentTemplateModel {
  id: string;
  thumbnail: string;
  name: string;
  theme: DocumentTemplateTheme;
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
  email: string;
  phone: string;
  address: string;
}

export interface DocumentSignatureData {
  label: string;
  image: string;
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
    return 0;
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
    return 0;
  }

  public get taxAmount() {
    return 0;
  }

  public get subtotal() {
    return 0;
  }

  public get total() {
    return 0;
  }

  constructor(
    public readonly template: DocumentTemplateModel,
    public readonly title: string,
    public readonly issuedDate: Date,
    public readonly dueDate: Date,
    public readonly documentNo: string,
    public readonly discount: number,
    public readonly shippingCost: number,
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
    issuedDate: issuedAt,
    items,
    paymentAccount,
    shippingCost,
    signature,
    taxes,
    template,
    terms,
    title,
  }: {
    template?: DocumentTemplateModel;
    title?: string;
    issuedDate?: Date;
    dueDate?: Date;
    documentNo?: string;
    discount?: number;
    shippingCost?: number;
    business?: DocumentBusinessData;
    customer?: DocumentCustomerData;
    signature?: DocumentSignatureData;
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
      issuedAt ?? this.issuedDate,
      dueDate ?? this.dueDate,
      documentNo ?? this.documentNo,
      discount ?? this.discount,
      shippingCost ?? this.shippingCost,
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
