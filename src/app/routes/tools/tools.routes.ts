import { Routes } from '@angular/router';

export const toolsRoutes: Routes = [
  {
    path: 'invoice-generator',
    loadComponent: () =>
      import('./invoice-generator/invoice-generator').then(
        (m) => m.InvoiceGenerator,
      ),
  },
  {
    path: 'receipt-generator',
    loadComponent: () =>
      import('./receipt-generator/receipt-generator').then(
        (m) => m.ReceiptGenerator,
      ),
  },
  {
    path: 'quotation-generator',
    loadComponent: () =>
      import('./quotation-generator/quotation-generator').then(
        (m) => m.QuotationGenerator,
      ),
  },
];
