import { Component, inject } from '@angular/core';
import { LegalLayout } from '../../components/legal/legal-layout/legal-layout';
import { LegalSection } from '../../components/legal/legal-section/legal-section';
import { ULComponent } from '../../components/shared/ul-component';
import { PComponent } from '../../components/shared/p-component';
import { LegalCallout } from '../../components/legal/legal-callout/legal-callout';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  imports: [ULComponent, PComponent, LegalLayout, LegalSection, LegalCallout],
  templateUrl: './terms.html',
  styleUrl: './terms.css',
})
export class Terms {
  public email = 'legal@billinox.com';
  public titleService = inject(Title);
  public metaService = inject(Meta);

  constructor() {
    this.titleService.setTitle('Terms of Service — Billinox');
    this.metaService.updateTag({
      name: 'description',
      content:
        'The terms that govern your use of Billinox, including subscriptions, acceptable use, and liability.',
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Terms of Service — Billinox',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content:
        'Read the Terms of Service that apply when you use Billinox to invoice customers and manage billing.',
    });
  }
}
