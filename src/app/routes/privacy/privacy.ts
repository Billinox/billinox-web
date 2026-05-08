import { Component, Input } from '@angular/core';
import { LegalLayout } from '../../components/legal/legal-layout/legal-layout';
import { LegalSection } from '../../components/legal/legal-section/legal-section';
import { LegalCallout } from '../../components/legal/legal-callout/legal-callout';

@Component({
  selector: 'app-ul',
  template: `
    <ul
      class="list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-primary"
    >
      <ng-content />
    </ul>
  `,
})
export class ULComponent {}

@Component({
  selector: 'app-p',
  standalone: true,
  template: `
    <p class="text-muted-foreground">
      <ng-content />
    </p>
  `,
})
export class PComponent {}

@Component({
  selector: 'app-privacy',
  imports: [ULComponent, PComponent, LegalLayout, LegalSection, LegalCallout],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css',
})
export class Privacy {
  email = 'privacy@billinox.com'
}
