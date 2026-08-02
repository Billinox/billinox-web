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
      name: 'Maryjoan Iwuji',
      role: 'Founder, Tessy Kitchen',
      initials: 'MI',
      avatar: '/images/1.webp',
    },
    {
      quote:
        'I send invoices the moment a project ends. Clients pay faster, and I finally have one place to see my whole business.',
      name: 'Assumpta Opara',
      role: 'Independent Contractor',
      initials: 'AO',
      avatar: '/images/2.webp',
    },
    {
      quote:
        'Switched from a clunky desktop tool. The reports alone saved us hours each month. Beautifully built software.',
      name: 'Grace Uwakwe',
      role: 'Sales, Lumen Labs',
      initials: 'GU',
      avatar: '/images/3.webp',
    },
    {
      quote:
        'We have been using Billinox for over a year now, and it has significantly improved our workflow and client management.',
      name: 'Kenneth Okpara',
      role: 'Cofounder, Plotterwave',
      initials: 'KO',
      avatar: '/images/4.webp',
    },
    {
      quote:
        'Billinox has been a game-changer for our communications business. The ability to manage projects and invoices seamlessly has boosted our efficiency and client satisfaction.',
      name: 'Confidence Onyeahiri',
      role: 'Owner, Powell Communications',
      initials: 'CO',
      avatar: '/images/5.webp',
    },
    {
      quote:
        'Billinox is a lifesaver for freelancers. I can track my hours, send invoices, and get paid without the headache of spreadsheets.',
      name: 'Reinhard',
      role: 'Freelancer',
      initials: 'R',
      avatar: '/images/6.webp',
    },
    {
      quote:
        'Billinox has transformed how I manage my freelance projects. The intuitive interface and powerful features make it a must-have tool for any freelancer.',
      name: 'Ifiok Ekot',
      role: 'Freelancer',
      initials: 'IE',
      avatar: '/images/7.webp',
    },
  ];
}
