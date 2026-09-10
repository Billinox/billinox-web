import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LegalCallout } from '@billinox/src/app/components/legal/legal-callout/legal-callout';
import { LegalLayout } from '@billinox/src/app/components/legal/legal-layout/legal-layout';
import { LegalSection } from '@billinox/src/app/components/legal/legal-section/legal-section';
import { PComponent } from '@billinox/src/app/components/shared/p-component';
import { ULComponent } from '@billinox/src/app/components/shared/ul-component';

@Component({
  selector: 'app-use-of-service',
  imports: [LegalLayout, LegalSection, PComponent, ULComponent, LegalCallout],
  templateUrl: './use-of-service.html',
  styleUrl: './use-of-service.css',
})
export class UseOfService {
  public abuseEmail = 'abuse@billinox.com';
  public legalEmail = 'legal@billinox.com';
  public privacyEmail = 'privacy@billinox.com';
  public titleService = inject(Title);
  public metaService = inject(Meta);

  constructor() {
    this.titleService.setTitle('Use of Service Agreement — Billinox');
    this.metaService.updateTag({
      name: 'description',
      content:
        'The practical agreement that governs how you use Billinox to invoice customers, manage billing, and back up your data.',
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Use of Service Agreement — Billinox',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content:
        'Roles, responsibilities, permitted use, and prohibited activities when you use Billinox.',
    });
    this.metaService.updateTag({
      property: 'twitter:title',
      content: 'Use of Service Agreement — Billinox',
    });
    this.metaService.updateTag({
      property: 'twitter:description',
      content:
        'Roles, responsibilities, permitted use, and prohibited activities when you use Billinox.',
    });
  }
}
