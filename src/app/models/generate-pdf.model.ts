export interface GeneratePDFRequest {
  type: 'modernX' | 'modern' | 'simple';
  content: {
    title: string;
    issuedAt: string;
    dueDate: string;
    documentNo: string;
    business: {
      name: string;
      username: string;
      phone: string;
      email: string;
      address: string;
      logo: string;
    };
    customer: {
      name: string;
      email: string | undefined | null;
      phone: string | undefined | null;
      address: string | undefined | null;
    };
    signature?: {
      label: string;
      image: string;
    };
    paymentAccount?: {
      description: string;
    };
    items: {
      description: string;
      quantity: number;
      price: string;
      subtotal: string;
    }[];
    terms: string[];
    taxes: {
      name: string;
      percentage: number;
      amount: string;
    }[];
    discount: string;
    discountPercentage: number;
    shippingCost: string;
    subtotal: string;
    total: string;
    paid: string;
    balance: string;
    theme: {
      primaryColor: string;
      table: {
        totalRowBackgroundColor?: string;
        totalRowTextColor?: string;
      };
      background: {
        image?: string;
        color?: string;
      };
    };
  };
}

export interface GeneratePDFResponse {
  pdf: string;
}
