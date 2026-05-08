import { Component } from '@angular/core';
import { LucideMail } from '@lucide/angular';
import { NgIcon } from '@ng-icons/core';
import {
  lucideGithub,
  lucideInstagram,
  lucideLinkedin,
  lucideTwitter,
} from '@ng-icons/lucide';

@Component({
  selector: 'app-footer',
  imports: [LucideMail, NgIcon],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  public cols = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'],
    },
    {
      title: 'Company',
      links: ['About', 'Customers', 'Careers', 'Press', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Help Center', 'Guides', 'API Docs', 'Status'],
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Security', 'Cookies', 'DPA'],
    },
  ];

  public socials = [
    { link: '', icon: lucideTwitter },
    { link: '', icon: lucideGithub },
    { link: '', icon: lucideLinkedin },
    { link: '', icon: lucideInstagram },
  ];

  public fullYear = new Date().getFullYear();
}
