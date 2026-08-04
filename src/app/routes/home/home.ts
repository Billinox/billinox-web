import { Component, inject } from '@angular/core';
import { Faq } from '../../components/site/faq/faq';
import { Benefits } from '../../components/site/benefits/benefits';
import { Features } from '../../components/site/features/features';
import { FinalCta } from '../../components/site/final-cta/final-cta';
import { Footer } from '../../components/site/footer/footer';
import { Hero } from '../../components/site/hero/hero';
import { Industries } from '../../components/site/industries/industries';
import { Navbar } from '../../components/site/navbar/navbar';
import { Pricing } from '../../components/site/pricing/pricing';
import { Showcase } from '../../components/site/showcase/showcase';
import { Testimonials } from '../../components/site/testimonials/testimonials';
import { SeoService } from '../../services/seo.service';

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
          content: 'Billinox — Smart offline-first business management',
        },
        {
          property: 'og:description',
          content:
            'Generate invoices, send quotations, track payments, manage customers, and grow your business with Billinox. Available for Android',
        },
        {
          property: 'twitter:title',
          content: 'Billinox — Smart offline-first business management',
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
