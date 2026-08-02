import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LucideCheck, LucideSparkles } from '@lucide/angular';
import { HlmButton } from '@spartan-ng/helm/button';
@Component({
  selector: 'app-pricing',
  imports: [NgClass, LucideCheck, LucideSparkles, HlmButton],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing {
  public tiers = [
    {
      name: 'Free',
      price: '$0',
      period: 'free forever',
      desc: 'For freelancers and small teams getting started.',
      features: [
        'Up to 2 invoices / month',
        'Up to 2 quotations / month',
        'Up to 5 customers / month',
        'limited business',
        'Basic invoice templates',
        'PDF export',
        'Offline mode',
      ],
      cta: 'Start free',
      highlighted: false,
    },
    {
      name: 'Premium',
      price: '$1',
      period: 'per month',
      desc: 'Everything growing businesses need to scale billing.',
      features: [
        'Unlimited invoices',
        'Unlimited quotations',
        'Unlimited businesses',
        'Professional invoice templates',
        'Advanced reports & analytics',
        'Automated reminders to get paid faster',
        'Cloud backup & sync',
        'Export invoices and reports anytime',
        'Priority email support',
      ],
      cta: 'Upgrade now',
      highlighted: true,
    },
  ];

  public router = inject(Router);

  getStarted() {
    this.router.navigateByUrl('/get-started');
  }
}
