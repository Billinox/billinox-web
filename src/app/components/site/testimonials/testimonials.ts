import { Component } from '@angular/core';
import { LucideStar } from '@lucide/angular';

@Component({
  selector: 'app-testimonials',
  imports: [LucideStar],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  public testimonials = [
    {
      quote:
        'Billinox helped us manage our inventory and sales with zero stress. The offline mode is a game-changer at our pop-up events.',
      name: 'Aisha Bello',
      role: 'Founder, Northwind Co.',
      initials: 'AB',
    },
    {
      quote:
        'I send invoices the moment a project ends. Clients pay faster, and I finally have one place to see my whole business.',
      name: 'Marco Silva',
      role: 'Independent Designer',
      initials: 'MS',
    },
    {
      quote:
        'Switched from a clunky desktop tool. The reports alone saved us hours each month. Beautifully built software.',
      name: 'Priya Raman',
      role: 'Operations Lead, Lumen Labs',
      initials: 'PR',
    },
    {
      quote:
        'Our retail team uses it across three branches. Sync just works — even with patchy internet. Highly recommend.',
      name: 'Daniel Okeke',
      role: 'Owner, Okeke Stores',
      initials: 'DO',
    },
  ];
}
