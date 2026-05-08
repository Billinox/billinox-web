import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { LucideCheck, LucideSparkles } from "@lucide/angular";
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
      name: 'Starter',
      price: '$0',
      period: 'free forever',
      desc: 'For freelancers and small teams getting started.',
      features: [
        'Up to 20 invoices / month',
        '1 user',
        'Basic invoice templates',
        'PDF export',
        'Offline mode',
      ],
      cta: 'Start free',
      highlighted: false,
    },
    {
      name: 'Business',
      price: '$19',
      period: 'per month',
      desc: 'Everything growing businesses need to scale billing.',
      features: [
        'Unlimited invoices',
        '5 users',
        'Advanced reports & analytics',
        'Cloud backup & sync',
        'Estimates & quotations',
        'Priority email support',
      ],
      cta: 'Start 14-day trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '$49',
      period: 'per month',
      desc: 'Advanced controls for multi-branch operations.',
      features: [
        'Unlimited everything',
        'Multi-branch support',
        'Role-based access',
        'Custom branding',
        'Dedicated success manager',
        'Priority 24/7 support',
      ],
      cta: 'Contact sales',
      highlighted: false,
    },
  ];
}
