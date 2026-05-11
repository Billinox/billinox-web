import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideMail } from '@lucide/angular';
import { NgIcon } from '@ng-icons/core';
import { socials } from '../../../constants/socials.constant';

@Component({
  selector: 'app-footer',
  imports: [LucideMail, NgIcon, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  public cols = [
    {
      title: 'Product',
      links: [
        { label: 'Features', link: '/features' },
        { label: 'Pricing', link: '/pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', link: '/about' },
        { label: 'Contact', link: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', link: '/blog' },
        { label: 'Help Center', link: '/help-center' },
        { label: 'Guides', link: '/guides' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', link: '/privacy' },
        { label: 'Terms', link: '/terms' },
        { label: 'Use Of Service', link: '/use-of-service' },
      ],
    },
  ];

  public socials = socials;
  public fullYear = new Date().getFullYear();
}
