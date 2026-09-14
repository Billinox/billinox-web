import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LegalCallout } from '@billinox/src/app/components/legal/legal-callout/legal-callout';
import { LegalLayout } from '@billinox/src/app/components/legal/legal-layout/legal-layout';
import { LegalSection } from '@billinox/src/app/components/legal/legal-section/legal-section';
import { PComponent } from '@billinox/src/app/components/shared/p-component';
import { ULComponent } from '@billinox/src/app/components/shared/ul-component';

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
    this.metaService.updateTag({
      name: 'twitter:title',
      content: 'Terms of Service — Billinox',
    });
    this.metaService.updateTag({
      name: 'twitter:description',
      content:
        'Read the Terms of Service that apply when you use Billinox to invoice customers and manage billing.',
    });
  }
}
