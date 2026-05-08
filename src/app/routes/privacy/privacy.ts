import { Component, Input } from '@angular/core';
import { LegalLayout } from '../../components/legal/legal-layout/legal-layout';
import { LegalSection } from '../../components/legal/legal-section/legal-section';
import { LegalCallout } from '../../components/legal/legal-callout/legal-callout';
import { ULComponent } from '../../components/shared/ul-component';
import { PComponent } from '../../components/shared/p-component';



@Component({
  selector: 'app-privacy',
  imports: [ULComponent, PComponent, LegalLayout, LegalSection, LegalCallout],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css',
})
export class Privacy {
  email = 'privacy@billinox.com'
}
