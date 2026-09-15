import { Component, inject, Signal } from '@angular/core';
import { currencies } from '@billinox/src/app/data/currency.data';
import { templates } from '@billinox/src/app/data/template.data';
import {
  DocumentItemData,
  DocumentStateDataModel,
  DocumentTaxData,
} from '@billinox/src/app/models/document.model';
import { FaqItem } from '@billinox/src/app/models/faq.model';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import { SchemaService } from '@billinox/src/app/services/schema.service';
import { SeoService } from '@billinox/src/app/services/seo.service';
import generateDocumentNo from '@billinox/src/app/utils/generate-document-no';
import { environment } from '@billinox/src/environments/environment';
import { addDays } from 'date-fns';
import { ToolLayout } from '../components/tool-layout/tool-layout';
import { DocumentEditor } from '../components/document-editor/document-editor';
import { DocumentThemeSelector } from '../components/document-editor/components/document-theme-selector/document-theme-selector';
import { DocumentTemplateSelector } from '../components/document-editor/components/document-template-selector/document-template-selector';
import { DocumentCTA } from '../components/document-cta/document-cta';
import { StorePromo } from '@billinox/src/app/components/shared/store-promo/store-promo';
import { ToolFaq } from '../components/tool-faq/tool-faq';

@Component({
  selector: 'app-receipt-generator',
  imports: [
    ToolLayout,
    DocumentEditor,
    DocumentThemeSelector,
    DocumentTemplateSelector,
    DocumentCTA,
    StorePromo,
    ToolFaq,
  ],
  templateUrl: './receipt-generator.html',
  styleUrl: './receipt-generator.css',
})
export class ReceiptGenerator {
  public faqs: FaqItem[] = [
    {
      question: 'What is a receipt generator?',
      answer:
        'A receipt generator is an online tool that helps you create professional receipts quickly. With Billinox, you can add customer, business, payment, and transaction details and generate a receipt ready to download, print, or share.',
      id: 1,
    },
    {
      question: 'Is Billinox Receipt Generator free?',
      answer:
        "Yes. Billinox's free receipt generator lets you create professional receipts without starting from scratch. You can add your transaction details and generate a receipt in seconds.",
      id: 2,
    },
    {
      question: 'How do I create a receipt online?',
      answer:
        'Enter your business and customer details, add the products or services purchased, enter the payment information and amounts, then generate your receipt with Billinox.',
      id: 3,
    },
    {
      question: 'Can I download my receipt as a PDF?',
      answer:
        'Yes. You can generate a professional receipt with Billinox and download it as a PDF for your records or to send to your customer.',
      id: 4,
    },
    {
      question: 'Can I print a receipt created with Billinox?',
      answer:
        'Yes. Billinox lets you create print-ready receipts that you can print for your customers or keep as a physical record of a transaction.',
      id: 5,
    },
    {
      question: 'Can I share a receipt with my customer?',
      answer:
        'Yes. After creating your receipt, you can share it with your customer digitally, making it easy to provide proof of payment or purchase.',
      id: 6,
    },
    {
      question: 'What information should a receipt include?',
      answer:
        'A professional receipt should include your business details, customer information when applicable, receipt number, date, purchased products or services, amounts, payment details, and the total paid.',
      id: 7,
    },
    {
      question: 'Can I add multiple products or services to a receipt?',
      answer:
        'Yes. Billinox allows you to include multiple products or services on a receipt, with their quantities and prices, so your customer can clearly see what was purchased.',
      id: 8,
    },
    {
      question: 'Who can use a receipt generator?',
      answer:
        'A receipt generator can be useful for freelancers, small businesses, retailers, service providers, contractors, consultants, and other businesses that need to provide customers with receipts.',
      id: 9,
    },
    {
      question: 'What is the difference between a receipt and an invoice?',
      answer:
        'An invoice requests payment for products or services, while a receipt confirms that payment has been received. Businesses can use both to document customer transactions.',
      id: 10,
    },
  ];
  public state!: Signal<DocumentStateDataModel>;
  public tag = 'Receipt Generator';
  public title = `<span class="text-gradient-gold">Create receipts</span> that make your business stand out`;
  public description = `Use Billinox free receipt generator to create professional receipts online in seconds. Add your business and customer details, payment information, products or services, and amounts, then download, print, or share your receipt with ease.
`;

  private _documentStateService = inject(DocumentStateService);
  private _seoService = inject(SeoService);
  private _schemaService = inject(SchemaService);

  constructor() {
    const title = 'Free Receipt Generator - Create Receipts Online | Billinox';
    const description =
      'Use Billinox free receipt generator to create professional receipts online. Add payment details, products, prices, and customer information, then download or print.';

    this._seoService.optimize({
      title: title,
      meta: [
        {
          property: 'keywords',
          content:
            'free receipt generator,online receipt generator,printable receipt generator,professional receipt generator',
        },
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:url',
          content: `${environment.baseUrl}/receipt-generator`,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
      ],
    });
  }

  ngOnInit(): void {
    this._documentStateService.reset(
      new DocumentStateDataModel(
        templates[0],
        'RECEIPT',
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
        ['Thanks for your patronage.'],
        [new DocumentTaxData('VAT', 7.5)],
      ),
    );
    this.state = this._documentStateService.state;

    this._schemaService.injectFaqSchema(this.faqs);
  }
}
