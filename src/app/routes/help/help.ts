import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  LucideCloud,
  LucideCreditCard,
  LucideDownload,
  LucideFileText,
  LucideRefreshCw,
  LucideShieldCheck,
  LucideSparkles,
  LucideUsers,
  LucideWallet,
  LucideWrench,
  LucideChevronRight,
  LucideCircleQuestionMark,
  LucideSearch,
  LucideDynamicIcon,
  LucideArrowRight,
  LucideMail,
  LucideBookOpen,
  LucideArrowUp,
} from '@lucide/angular';
import { BehaviorSubject, combineLatest, debounceTime } from 'rxjs';
import { PlatformService } from '../../services/platform.service';
import { Navbar } from '../../components/site/navbar/navbar';
import { HlmInput } from '@spartan-ng/helm/input';
import { AsyncPipe, NgClass } from '@angular/common';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';
import { Highlight } from '../../components/help/highlight/highlight';
import { RouterLink } from '@angular/router';
import { Footer } from '../../components/site/footer/footer';
import { HlmButton } from '@spartan-ng/helm/button';
import { SeoService } from '../../services/seo.service';

const categories = [
  { id: 'getting-started', label: 'Getting Started', icon: LucideSparkles },
  { id: 'invoices', label: 'Invoices', icon: LucideFileText },
  { id: 'customers', label: 'Customers', icon: LucideUsers },
  { id: 'payments', label: 'Payments', icon: LucideCreditCard },
  { id: 'backup', label: 'Cloud Backup', icon: LucideCloud },
  { id: 'sync', label: 'Multi-device Sync', icon: LucideRefreshCw },
  { id: 'pdf', label: 'PDF Export', icon: LucideDownload },
  { id: 'troubleshooting', label: 'Troubleshooting', icon: LucideWrench },
  { id: 'billing', label: 'Account & Billing', icon: LucideWallet },
  { id: 'security', label: 'Privacy & Security', icon: LucideShieldCheck },
] as const;

type CategoryId = (typeof categories)[number]['id'];

const faqs: {
  category: CategoryId;
  q: string;
  a: string;
  related?: { label: string; to?: string; href?: string }[];
}[] = [
  {
    category: 'getting-started',
    q: 'Does Billinox work offline?',
    a: 'Yes. Billinox is built offline-first. Every feature — creating invoices, managing customers, generating PDFs — works without an internet connection. When you reconnect, optional encrypted backups sync in the background.',
    related: [{ label: 'Get Started guide', to: '/get-started' }],
  },
  {
    category: 'invoices',
    q: 'How do I create an invoice?',
    a: 'Open the dashboard, tap “New Invoice”, pick a customer, add line items, and tap Send. Your invoice is saved instantly to your device and ready to share as a PDF or link.',
    related: [{ label: 'Watch the tutorial', to: '/guides' }],
  },
  {
    category: 'pdf',
    q: 'Can I export invoices as PDF?',
    a: 'Absolutely. Every invoice and quotation can be exported as a high-resolution PDF. Choose from minimal, classic, or branded templates.',
  },
  {
    category: 'backup',
    q: 'How do I backup my data?',
    a: 'Go to Settings → Backups. You can create encrypted local backups, save to your preferred cloud storage, or enable automatic daily backups on Billinox Cloud.',
  },
  {
    category: 'sync',
    q: 'Can I use Billinox on multiple devices?',
    a: 'Yes. Sign in to the same Billinox account on phone, tablet, or desktop. Changes sync automatically when each device is online.',
  },
  {
    category: 'security',
    q: 'Is my business data secure?',
    a: 'All cloud backups are end-to-end encrypted with keys derived on-device. Local data uses platform-standard secure storage. We never sell or share your records.',
    related: [{ label: 'Privacy Policy', to: '/privacy' }],
  },
  {
    category: 'backup',
    q: 'How do I restore a backup?',
    a: 'Settings → Backups → Restore. Select the snapshot you want and confirm. Restoration is non-destructive — you can preview before replacing local data.',
  },
  {
    category: 'billing',
    q: 'How do I upgrade or cancel my subscription?',
    a: 'Manage your plan from Settings → Account & Billing. Upgrades take effect immediately; cancellations remain active until the end of the billing period.',
  },
  {
    category: 'customers',
    q: 'Can I import existing customers?',
    a: 'Yes. Settings → Customers → Import. We support CSV and vCard formats with automatic field mapping.',
  },
  {
    category: 'troubleshooting',
    q: 'My sync seems stuck — what should I do?',
    a: 'Pull down on the dashboard to force-sync. If the issue persists, check Settings → Sync Status for an error message and contact support with the diagnostic ID shown.',
  },
  {
    category: 'payments',
    q: 'Can I track partial payments?',
    a: 'Yes. Open any invoice, tap Record Payment, and enter the amount received. Billinox tracks the outstanding balance automatically.',
  },
  {
    category: 'getting-started',
    q: 'How do I contact support?',
    a: 'Email us at hello@billinox.com or use the support form on the Contact page. We typically reply within one business day.',
    related: [{ label: 'Open Contact page', to: '/contact' }],
  },
];

type FAQ = (typeof faqs)[number];

const popularTopics = [
  {
    title: 'Creating your first invoice',
    icon: LucideFileText,
    category: 'invoices' as CategoryId,
  },
  {
    title: 'Exporting PDF invoices',
    icon: LucideDownload,
    category: 'pdf' as CategoryId,
  },
  {
    title: 'Syncing devices',
    icon: LucideRefreshCw,
    category: 'sync' as CategoryId,
  },
  {
    title: 'Restoring backups',
    icon: LucideCloud,
    category: 'backup' as CategoryId,
  },
  {
    title: 'Managing customers',
    icon: LucideUsers,
    category: 'customers' as CategoryId,
  },
  {
    title: 'Account & billing',
    icon: LucideWallet,
    category: 'billing' as CategoryId,
  },
];

@Component({
  selector: 'app-help',
  imports: [
    Navbar,
    LucideChevronRight,
    LucideCircleQuestionMark,
    LucideSearch,
    HlmInput,
    LucideDynamicIcon,
    NgClass,
    HlmAccordionImports,
    Highlight,
    RouterLink,
    LucideArrowRight,
    LucideMail,
    LucideBookOpen,
    Footer,
    LucideArrowUp,
    AsyncPipe,
    HlmButton,
  ],
  templateUrl: './help.html',
  styleUrl: './help.css',
})
export class HelpPage implements OnInit, OnDestroy {
  public categories = categories;
  public faqs = faqs;
  public popularTopics = popularTopics;
  public query$ = new BehaviorSubject('');
  public active$ = new BehaviorSubject<CategoryId>('getting-started');
  public showTop = false;
  public filtered: FAQ[] = [];

  public onScroll = () => (this.showTop = window.scrollY > 600);

  public get activeLabel() {
    return this.categories.find((c) => c.id === this.active$.value)?.label;
  }

  private platformService = inject(PlatformService);
  private seoService = inject(SeoService);

  constructor() {
    this.seoService.optimize({
      title: 'Help Center — Billinox Support & FAQs',
      meta: [
        {
          name: 'description',
          content:
            'Search the Billinox knowledge base, browse FAQs, and find answers to questions about invoicing, sync, backups, and PDF exports.',
        },
        { property: 'og:title', content: 'Billinox Help Center' },
        {
          property: 'og:description',
          content: 'Answers, guides, and support for the Billinox platform.',
        },
      ],
    });
  }

  ngOnInit(): void {
    this.platformService.runOnBrowser(() =>
      window.addEventListener('scroll', this.onScroll),
    );

    combineLatest([
      this.query$.pipe(debounceTime(500)),
      this.active$,
    ]).subscribe(([query, active]) => {
      this.filtered = faqs.filter((f) => {
        const q = query.trim().toLowerCase();
        const matchesCat = q ? true : f.category === active;
        const matchesQuery =
          !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
        return matchesCat && matchesQuery;
      });
    });
  }

  ngOnDestroy(): void {
    this.platformService.runOnBrowser(() =>
      window.removeEventListener('scroll', this.onScroll),
    );
  }

  setQuery(query: string) {
    this.query$.next(query);
  }

  setActive(active: CategoryId) {
    this.active$.next(active);
  }

  scrollInto() {
    document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
