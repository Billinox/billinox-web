import { Component, inject, OnInit, Signal } from '@angular/core';
import { StorePromo } from '@billinox/src/app/components/shared/store-promo/store-promo';
import {
  DocumentItemData,
  DocumentStateDataModel,
  DocumentTaxData,
} from '@billinox/src/app/models/document.model';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import generateDocumentNo from '@billinox/src/app/utils/generate-document-no';
import { DocumentTemplateSelector } from '../components/document-editor/components/document-template-selector/document-template-selector';
import { DocumentEditor } from '../components/document-editor/document-editor';
import { ToolLayout } from '../components/tool-layout/tool-layout';
import { currencies } from '@billinox/src/app/data/currency.data';
import { DocumentCTA } from '../components/document-cta/document-cta';
import { addDays } from 'date-fns';
import { ToolFaq } from '../components/tool-faq/tool-faq';
import { environment } from '@billinox/src/environments/environment';
import { FaqItem } from '@billinox/src/app/models/faq.model';
import { SchemaService } from '@billinox/src/app/services/schema.service';
import { DocumentThemeSelector } from '@billinox/src/app/routes/tools/components/document-editor/components/document-theme-selector/document-theme-selector';
import { templates } from '@billinox/src/app/data/template.data';
import { SeoService } from '@billinox/src/app/services/seo.service';

@Component({
  selector: 'app-invoice-generator',
  imports: [
    ToolLayout,
    DocumentEditor,
    StorePromo,
    DocumentTemplateSelector,
    DocumentCTA,
    ToolFaq,
    DocumentThemeSelector,
  ],
  templateUrl: './invoice-generator.html',
  styleUrl: './invoice-generator.css',
})
export class InvoiceGenerator implements OnInit {
  public faqs: FaqItem[] = [
    {
      id: 1,
      question: 'What is an invoice generator?',
      answer: `An invoice generator is a tool that helps you create professional invoices quickly without having to design one from scratch. You can enter your business and customer details, add products or services, set prices, taxes, or discounts, and generate a ready-to-send invoice.\n\nWith [Billinox](${environment.baseUrl}), you can create and manage professional invoices from your phone without dealing with complicated spreadsheets or document formatting.`,
    },
    {
      id: 2,
      question: 'Can I create a free invoice with Billinox?',
      answer: `Yes. Billinox makes it easy to create professional invoices without complicated setup. You can add your business details, customer information, products or services, and payment details to generate an invoice that is ready to share or download.\n\nIt is designed to make invoicing simple for freelancers, entrepreneurs, small businesses, and service providers.`,
    },
    {
      id: 3,
      question: 'How do I create an invoice online?',
      answer: `Creating an invoice is simple. Start by adding your business information and customer details, then add the products or services you are charging for. Enter the prices and any applicable taxes or discounts, review the totals, and generate your invoice.\n\nWith an invoice generator like Billinox, you can create a professional invoice without manually designing the document.`,
    },
    {
      id: 4,
      question: 'Can I create a professional invoice without Word or Excel?',
      answer: `Yes. You don't need Microsoft Word, Excel, or design software to create a professional invoice. An invoice generator handles the layout and calculations for you, so you can focus on providing the right information to your customer.\n\nBillinox lets you create professional invoices without spending time formatting spreadsheets or documents.`,
    },
    {
      id: 5,
      question: 'Can I download my invoice as a PDF?',
      answer: `Yes. You can generate a print-ready PDF invoice that you can download, print, or send to your customer. PDF invoices are convenient because they preserve the formatting of your document when you share them.\n\nThis makes it easy to send invoices to customers through WhatsApp,Email, Facebook Messenger or other messaging apps.`,
    },
    {
      id: 6,
      question: 'Can I use an invoice generator in Nigeria?',
      answer: `Yes. Businesses and freelancers in Nigeria can use an invoice generator to create professional invoices for their customers. Whether you sell products, provide services, work with local clients, or serve customers online, digital invoicing can make it easier to create and keep track of your invoices.\n\nBillinox is built to make invoicing convenient for Nigerian small businesses, entrepreneurs, freelancers, and service providers.`,
    },
    {
      id: 7,
      question: 'Can I customize my invoices?',
      answer: `Yes. A good invoice should reflect your business rather than look like a generic document. Billinox provides customizable invoice templates that allow you to add your business information, customer details, invoice items, payment information, and other relevant details.\n\nYou can create invoices that look professional while keeping your business information clear and easy for customers to understand.`,
    },
    {
      id: 8,
      question: 'Can I create an invoice from my phone?',
      answer: `Yes. Billinox is a mobile invoice maker designed for creating and managing invoices from your phone. You don't have to wait until you are back at your computer to bill a customer.\n\nWhether you're at your shop, office, home, or meeting a client, you can create an invoice when you need it.`,
    },
    {
      id: 9,
      question: 'Who should use an invoice generator?',
      answer: `An invoice generator can be useful for anyone who regularly charges customers for products or services. This includes small business owners, freelancers, consultants, contractors, agencies, retailers, entrepreneurs, and other service providers.\n\nIf you currently create invoices manually or rely on spreadsheets, an invoice maker can help you save time and keep your invoicing process more organized.`,
    },
    {
      id: 10,
      question: 'Why use Billinox instead of creating invoices manually?',
      answer: `Creating invoices manually can be time-consuming, especially when you have to format documents, calculate totals, enter customer information repeatedly, and keep track of previous invoices.\n\nBillinox brings these tasks into one simple invoicing app. You can create professional invoices faster, manage your customers and payments, and keep your invoicing organized without relying on complicated spreadsheets.`,
    },
  ];
  public state!: Signal<DocumentStateDataModel>;

  private _documentStateService = inject(DocumentStateService);
  private _seoService = inject(SeoService);
  private _schemaService = inject(SchemaService);

  constructor() {
    this._seoService.optimize({
      title:
        'Free Printable Invoice Generator - Create Invoices Online | Billinox',
      meta: [
        {
          property: 'keywords',
          content: 'free printable invoice generator',
        },
        {
          name: 'description',
          content:
            'Create professional invoices online for free with Billinox. Customize, download, and print clean invoices ready to send to your customers.',
        },
        {
          property: 'og:title',
          content:
            'Free Printable Invoice Generator - Create Invoices Online | Billinox',
        },
        {
          property: 'og:description',
          content:
            'Create professional invoices online for free with Billinox. Customize, download, and print clean invoices ready to send to your customers.',
        },
         {
          property: 'og:url',
          content: `${environment.baseUrl}/invoice-generator`,
        },
        {
          name: 'twitter:title',
          content:
            'Free Printable Invoice Generator - Create Invoices Online | Billinox',
        },
        {
          name: 'twitter:description',
          content:
            'Create professional invoices online for free with Billinox. Customize, download, and print clean invoices ready to send to your customers.',
        },
      ],
    });
  }

  ngOnInit(): void {
    this._documentStateService.reset(
      new DocumentStateDataModel(
        templates[0],
        'INVOICE',
        new Date(),
        addDays(new Date(), 2),
        generateDocumentNo(),
        0,
        0,
        currencies['USD'],
        undefined,
        undefined,
        undefined,
        undefined,
        [new DocumentItemData('Logo design', 1, 35)],
        ['Please make the payment by the due date.'],
        [new DocumentTaxData('VAT', 7.5)],
      ),
    );
    this.state = this._documentStateService.state;

    this._schemaService.injectFaqSchema(this.faqs);
  }
}
