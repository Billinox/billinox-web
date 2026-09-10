import { Component, inject } from '@angular/core';
import { Benefits } from '@billinox/src/app/components/site/benefits/benefits';
import { Faq } from '@billinox/src/app/components/site/faq/faq';
import { Features } from '@billinox/src/app/components/site/features/features';
import { FinalCta } from '@billinox/src/app/components/site/final-cta/final-cta';
import { Footer } from '@billinox/src/app/components/site/footer/footer';
import { Hero } from '@billinox/src/app/components/site/hero/hero';
import { Industries } from '@billinox/src/app/components/site/industries/industries';
import { Navbar } from '@billinox/src/app/components/site/navbar/navbar';
import { Pricing } from '@billinox/src/app/components/site/pricing/pricing';
import { Showcase } from '@billinox/src/app/components/site/showcase/showcase';
import { Testimonials } from '@billinox/src/app/components/site/testimonials/testimonials';
import { SeoService } from '@billinox/src/app/services/seo.service';

@Component({
  selector: 'app-home',
  imports: [
    Faq,
    Benefits,
    Features,
    FinalCta,
    Footer,
    Hero,
    Industries,
    Navbar,
    Pricing,
    Showcase,
    Testimonials,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private seoService = inject(SeoService);

  constructor() {
    this.seoService.optimize({
      title: 'Billinox - Invoice Maker, Estimates & Payment Tracking App',
      meta: [
        {
          name: 'description',
          content:
            'Generate invoices, send quotations, track payments, manage customers, and grow your business with Billinox. Available for Android',
        },
        {
          property: 'og:title',
          content: 'Billinox - Invoice Maker, Estimates & Payment Tracking App',
        },
        {
          property: 'og:description',
          content:
            'Generate invoices, send quotations, track payments, manage customers, and grow your business with Billinox. Available for Android',
        },
        {
          property: 'twitter:title',
          content: 'Billinox - Invoice Maker, Estimates & Payment Tracking App',
        },
        {
          property: 'twitter:description',
          content:
            'Generate invoices, send quotations, track payments, manage customers, and grow your business with Billinox. Available for Android',
        },
      ],
    });
  }
}
