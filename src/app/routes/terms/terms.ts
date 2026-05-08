import { Component } from '@angular/core';
import { LegalLayout } from '../../components/legal/legal-layout/legal-layout';
import { LegalSection } from '../../components/legal/legal-section/legal-section';
import { ULComponent } from '../../components/shared/ul-component';
import { PComponent } from '../../components/shared/p-component';
import { LegalCallout } from '../../components/legal/legal-callout/legal-callout';

@Component({
  selector: 'app-terms',
  imports: [ULComponent, PComponent, LegalLayout, LegalSection, LegalCallout],
  templateUrl: './terms.html',
  styleUrl: './terms.css',
})
export class Terms {
  public email = 'legal@billinox.com';
}
