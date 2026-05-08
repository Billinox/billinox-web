import { Component } from '@angular/core';
import {
  HlmAccordion,
  HlmAccordionContent,
  HlmAccordionItem,
  HlmAccordionTrigger,
} from '@spartan-ng/helm/accordion';

@Component({
  selector: 'app-faq',
  imports: [
    HlmAccordion,
    HlmAccordionItem,
    HlmAccordionTrigger,
    HlmAccordionContent,
  ],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  public faqs = [
    {
      q: 'Does Billinox work offline?',
      a: 'Yes. Billinox is offline-first. You can create invoices, manage customers, and record payments without internet. When you reconnect, everything syncs automatically.',
    },
    {
      q: 'Can I back up my data?',
      a: 'Absolutely. Cloud backup is built in and end-to-end encrypted. You can restore your full workspace on any device in seconds.',
    },
    {
      q: 'Can I export invoices as PDF?',
      a: 'Yes — every invoice and estimate can be exported as a polished PDF, branded with your logo and colors.',
    },
    {
      q: 'Can multiple devices connect to the same workspace?',
      a: 'Yes. Sign in on phone, tablet, and web. Changes sync in real time across all your devices.',
    },
    {
      q: 'Is my business data secure?',
      a: 'Your data is encrypted at rest and in transit. We follow industry-standard practices and you control who has access at all times.',
    },
  ];
}
