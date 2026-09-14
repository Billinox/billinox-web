import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideMail } from '@lucide/angular';
import { NgIcon } from '@ng-icons/core';
import { socials } from '../../../constants/socials.constant';
import { StoreBadge } from '../../shared/store-badge/store-badge';
import { NgTemplateOutlet } from '@angular/common';

interface FooterItem {
  title: string;
  links: { label: string; link: string; fragment?: string }[];
}

@Component({
  selector: 'app-footer',
  imports: [LucideMail, NgIcon, RouterLink, StoreBadge, NgTemplateOutlet],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  public cols: (FooterItem | FooterItem[])[] = [
    [
      {
        title: 'Product',
        links: [
          { label: 'Features', link: '/', fragment: 'features' },
          { label: 'Pricing', link: '/', fragment: 'pricing' },
        ],
      },
      {
        title: 'Free Tools',
        links: [
          { label: 'Invoice Generator', link: '/invoice-generator' },
          { label: 'Receipt Generator', link: '/receipt-generator' },
          { label: 'Quotation Generator', link: '/quotation-generator' },
        ],
      },
    ],
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

  isArray = (value: any): boolean => Array.isArray(value);
}
