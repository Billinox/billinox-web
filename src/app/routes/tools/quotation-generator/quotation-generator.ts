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
  selector: 'app-quotation-generator',
  imports: [
    ToolLayout,
    DocumentEditor,
    DocumentThemeSelector,
    DocumentTemplateSelector,
    DocumentCTA,
    StorePromo,
    ToolFaq,
  ],
  templateUrl: './quotation-generator.html',
  styleUrl: './quotation-generator.css',
})
export class QuotationGenerator {
  public faqs: FaqItem[] = [
    {
      question: 'What is a quotation generator?',
      answer: `A quotation generator is an online tool that helps you quickly create professional quotations for products or services. With [Billinox](${environment.baseUrl}), you can add customer details, prices, discounts, taxes, and payment terms, then generate a ready-to-share quotation.`,
      id: 1,
    },
    {
      question: "Is Billinox's quotation generator free?",
      answer:
        "Yes. Billinox's quotation generator lets you create professional quotations for free, making it easy to prepare quotes for your customers without starting from scratch.",
      id: 2,
    },
    {
      question: 'How do I create a quotation online?',
      answer:
        'Enter your business and customer details, add the products or services you are quoting for, set your prices, discounts, taxes, and payment terms, then generate your quotation with Billinox.',
      id: 3,
    },
    {
      question: 'Can I download my quotation as a PDF?',
      answer:
        'Yes. After creating your quotation with Billinox, you can generate a professional PDF that is ready to download, print, or share with your customer.',
      id: 4,
    },
    {
      question: 'Can I print or share a quotation with my customer?',
      answer:
        'Yes. Billinox makes it easy to print or share your completed quotation with customers after generating it.',
      id: 5,
    },
    {
      question: 'Can I add discounts and taxes to a quotation?',
      answer:
        'Yes. You can include prices, discounts, and taxes in your quotation to clearly show your customer how the final amount was calculated.',
      id: 6,
    },
    {
      question: 'Can I create quotations for different products or services?',
      answer:
        "Yes. Billinox's quotation generator works for different types of products and services. You can add multiple items, descriptions, quantities, and prices to create a detailed quote.",
      id: 7,
    },
    {
      question: 'Can I customize my quotations?',
      answer:
        'Yes. Billinox lets you create personalized quotations using your business information and customer details, helping you present a professional quote that reflects your business.',
      id: 8,
    },
    {
      question: 'What is the difference between a quotation and an invoice?',
      answer:
        'A quotation shows a customer the expected cost of products or services before they make a purchase. An invoice is typically issued after a customer agrees to the quote and payment is due.',
      id: 9,
    },
    {
      question: 'Who can use a quotation generator?',
      answer:
        'A quotation generator can be used by freelancers, contractors, service providers, consultants, retailers, agencies, and small businesses that need to create professional quotes for customers.',
      id: 10,
    },
  ];
  public state!: Signal<DocumentStateDataModel>;
  public tag = 'Quotation Generator';
  public title = `<span class="text-gradient-gold">Create quotations</span> that make your business stand out`;
  public description = `Use Billinox's free quotation generator to create professional quotes online in seconds. Add your business and customer details, list products or services, set prices, discounts, taxes, and terms, then download, print, or share your quotation with ease.`;

  private _documentStateService = inject(DocumentStateService);
  private _seoService = inject(SeoService);
  private _schemaService = inject(SchemaService);

  constructor() {
    const title = 'Free Quotation Generator - Create Quotes Online | Billinox';
    const description =
      'Create professional quotations for free with Billinox. Add prices, taxes and discounts, then download, print or share your quote.';

    this._seoService.optimize({
      title: title,
      meta: [
        {
          property: 'keywords',
          content:
            'free quotation generator,online quote maker,create a quotation online',
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
          content: `${environment.baseUrl}/quotation-generator`,
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
        'QUOTATION',
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
