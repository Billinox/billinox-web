import { Component } from '@angular/core';
import { Faq } from './components/site/faq/faq';
import { Benefits } from './components/site/benefits/benefits';
import { Features } from './components/site/features/features';
import { FinalCta } from './components/site/final-cta/final-cta';
import { Footer } from './components/site/footer/footer';
import { Hero } from './components/site/hero/hero';
import { Industries } from './components/site/industries/industries';
import { Navbar } from './components/site/navbar/navbar';
import { Pricing } from './components/site/pricing/pricing';
import { Showcase } from './components/site/showcase/showcase';
import { Testimonials } from './components/site/testimonials/testimonials';

@Component({
  selector: 'app-root',
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
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'billinox';
}
