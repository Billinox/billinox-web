import { Component, inject, Input } from '@angular/core';
import { LegalLayout } from '../../components/legal/legal-layout/legal-layout';
import { LegalSection } from '../../components/legal/legal-section/legal-section';
import { LegalCallout } from '../../components/legal/legal-callout/legal-callout';
import { ULComponent } from '../../components/shared/ul-component';
import { PComponent } from '../../components/shared/p-component';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from '../../services/seo.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-privacy',
  imports: [ULComponent, PComponent, LegalLayout, LegalSection, LegalCallout],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css',
})
export class Privacy {
  email = 'privacy@billinox.com';
  public seoService = inject(SeoService);

  constructor() {
    this.seoService.optimize({
      title: 'Privacy Policy — Billinox',
      meta: [
        {
          name: 'description',
          content:
            'How Billinox collects, uses, stores, and protects your data. GDPR, EU DSA, and Nigeria NDPA compliant.',
        },
        {
          property: 'og:title',
          content: 'Privacy Policy — Billinox',
        },
        {
          property: 'og:description',
          content:
            'Privacy-first, offline-first invoicing. Read how Billinox handles your data under GDPR, DSA, and NDPA.',
        },
        {
          property: 'twitter:title',
          content: 'Privacy Policy — Billinox',
        },
        {
          property: 'twitter:description',
          content:
            'Privacy-first, offline-first invoicing. Read how Billinox handles your data under GDPR, DSA, and NDPA.',
        },
        {
          property: 'og:url',
          content: `${environment.baseUrl}/privacy`,
        },
      ],
    });
  }
}
