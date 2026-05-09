import { Component, inject, Input } from '@angular/core';
import { LegalLayout } from '../../components/legal/legal-layout/legal-layout';
import { LegalSection } from '../../components/legal/legal-section/legal-section';
import { LegalCallout } from '../../components/legal/legal-callout/legal-callout';
import { ULComponent } from '../../components/shared/ul-component';
import { PComponent } from '../../components/shared/p-component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  imports: [ULComponent, PComponent, LegalLayout, LegalSection, LegalCallout],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css',
})
export class Privacy {
  email = 'privacy@billinox.com';
  public titleService = inject(Title);
  public metaService = inject(Meta);

  constructor() {
    this.titleService.setTitle('Privacy Policy — Billinox');
    this.metaService.updateTag({
      name: 'description',
      content:
        'How Billinox collects, uses, stores, and protects your data. GDPR, EU DSA, and Nigeria NDPA compliant.',
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Privacy Policy — Billinox',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content:
        'Privacy-first, offline-first invoicing. Read how Billinox handles your data under GDPR, DSA, and NDPA.',
    });
  }
}
