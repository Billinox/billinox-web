import { Component, inject, OnInit } from '@angular/core';
import {
  LucideCircleCheck,
  LucideGraduationCap,
  LucideSparkles,
  LucideTrendingUp,
  LucideSearch,
  LucideClock,
  LucidePlay,
  LucideDynamicIcon,
  LucideMessageSquare,
  LucideBookmark,
  LucideArrowRight,
} from '@lucide/angular';
import { debounceTime, Subject } from 'rxjs';
import { Navbar } from '../../components/site/navbar/navbar';
import { NgClass } from '@angular/common';
import { Thumbnail } from '../../components/guide/thumbnail/thumbnail';
import { DifficultyBadge } from '../../components/guide/difficulty-badge/difficulty-badge';
import { Footer } from '../../components/site/footer/footer';
import { HlmButton } from '@spartan-ng/helm/button';
import { NgIconComponent } from '@ng-icons/core';
import { lucideYoutube } from '@ng-icons/lucide';
import { TutorialDetails } from '../../components/guide/tutorial-details/tutorial-details';
import { GuideCategories, Tutorial } from '../../models/guide.model';
import { HlmInput } from '@spartan-ng/helm/input';
import { SeoService } from '../../services/seo.service';
import { RouterLink } from '@angular/router';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-guides',
  imports: [
    Navbar,
    LucideSearch,
    NgClass,
    Thumbnail,
    DifficultyBadge,
    LucideClock,
    LucidePlay,
    LucideDynamicIcon,
    Footer,
    HlmButton,
    LucideBookmark,
    NgIconComponent,
    LucideArrowRight,
    TutorialDetails,
    HlmInput,
    RouterLink,
  ],
  templateUrl: './guides.html',
  styleUrl: './guides.css',
})
export class Guides implements OnInit {
  public lucideYoutube = lucideYoutube;
  public categories = GuideCategories;
  public tutorials: Tutorial[] = [
    {
      id: 't1',
      title: 'Billinox in 1 Minutes — Quick Tour',
      description: 'A whirlwind tour of every core feature.',
      category: 'Getting Started',
      duration: '1:28',
      difficulty: 'Beginner',
      date: 'Aug 5, 2026',
      views: 18420,
      videoId: 'uyI7IAOaiUU',
    },
    {
      id: 't2',
      title: 'Create Your First Professional Invoice',
      description: 'From a blank canvas to a sent invoice in minutes.',
      category: 'Invoice Creation',
      duration: '1:41',
      difficulty: 'Beginner',
      date: 'Aug 12, 2026',
      views: 12890,
      videoId: 'xL-taTI2YK0',
    },
    {
      id: 't3',
      title: 'Manage Customers Like a Pro',
      description: 'Tags, segments, and reusable billing profiles.',
      category: 'Customer Management',
      duration: '0:41',
      difficulty: 'Intermediate',
      date: 'Aug 12, 2026',
      views: 9210,
      videoId: 'OGYzNXTvxug',
    },
    {
      id: 't4',
      title: 'Track Payments and Reconcile Faster',
      description: 'Mark, partial-pay, and follow up automatically.',
      category: 'Payment Tracking',
      duration: '0:08',
      difficulty: 'Intermediate',
      date: 'Aug 12, 2026',
      views: 7340,
      videoId: 'odSnkgqAjXw',
    },
    {
      id: 't5',
      title: 'Export Print-Ready PDFs',
      description: 'Custom templates, branding, and bulk export.',
      category: 'PDF Export',
      duration: '0:13',
      difficulty: 'Beginner',
      date: 'Aug 13, 2026',
      views: 8810,
      videoId: '_-2TiJNqhzs',
    },
    {
      id: 't6',
      title: 'Set up Encrypted Cloud Backups',
      description: 'Sleep well — your data is safely backed up.',
      category: 'Cloud Backup',
      duration: '0:35',
      difficulty: 'Intermediate',
      date: 'Aug 12, 2026',
      views: 6150,
      videoId: 'dEJ6jCnlLWo',
    },
    // {
    //   id: 't7',
    //   title: 'Sync Across Phone, Tablet & Laptop',
    //   description: 'Multi-device workflows without conflict.',
    //   category: 'Multi-device Sync',
    //   duration: '11:44',
    //   difficulty: 'Advanced',
    //   date: 'Mar 9, 2026',
    //   views: 4980,
    //   videoId: 'dQw4w9WgXcQ',
    // },
    // {
    //   id: 't8',
    //   title: '10 Productivity Tips Power Users Love',
    //   description: 'Shortcuts, snippets, and workflow tricks.',
    //   category: 'Tips & Productivity',
    //   duration: '12:15',
    //   difficulty: 'Intermediate',
    //   date: 'Feb 27, 2026',
    //   views: 11220,
    //   videoId: 'dQw4w9WgXcQ',
    // },
    // {
    //   id: 't9',
    //   title: 'Troubleshooting Sync Issues',
    //   description: 'Diagnose and resolve common sync errors.',
    //   category: 'Troubleshooting',
    //   duration: '8:50',
    //   difficulty: 'Advanced',
    //   date: 'Feb 18, 2026',
    //   views: 3870,
    //   videoId: 'dQw4w9WgXcQ',
    // },
  ];

  public learningPaths = [
    {
      title: 'Beginner Path',
      desc: 'Set up Billinox and send your first invoice.',
      lessons: 6,
      hours: '1.5h',
      icon: LucideGraduationCap,
    },
    {
      title: 'Business Setup',
      desc: 'Branding, taxes, and customer profiles.',
      lessons: 8,
      hours: '2h',
      icon: LucideSparkles,
    },
    {
      title: 'Invoice Mastery',
      desc: 'Templates, recurring billing, and exports.',
      lessons: 10,
      hours: '2.5h',
      icon: LucideCircleCheck,
    },
    {
      title: 'Productivity Workflow',
      desc: 'Shortcuts, automation, and multi-device.',
      lessons: 7,
      hours: '1.75h',
      icon: LucideTrendingUp,
    },
  ];

  public community = [
    {
      icon: LucideMessageSquare,
      title: 'Join the community',
      desc: 'Connect with other Billinox users worldwide.',
      cta: 'Join now',
      link: 'https://whatsapp.com/channel/0029Vb89iy7GpLHXlFg2kz3G',
    },
    {
      icon: LucideGraduationCap,
      title: 'Request a tutorial',
      desc: "Tell us what you'd like to learn next.",
      cta: 'Suggest topic',
      route: '/contact',
    },
    {
      icon: LucideSparkles,
      title: 'Share feedback',
      desc: 'Help shape the future of Billinox Academy.',
      cta: 'Send feedback',
      route: '/contact',
    },
  ];

  public bookmarkKey = 'tutorial-bookmark';
  public active = 'All';
  public openVideo: Tutorial | null = null;
  public bookmarks: Set<string> = new Set();
  public filteredTutorials: Tutorial[] = this.tutorials;
  public search$ = new Subject<string>();

  public featured = this.tutorials[0];
  public popular = [...this.tutorials]
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  toggleBookmark = (id: string) => {
    this.bookmarks.has(id) ? this.bookmarks.delete(id) : this.bookmarks.add(id);

    localStorage.setItem(
      this.bookmarkKey,
      JSON.stringify([...this.bookmarks.values()]),
    );
  };

  public get related(): Tutorial[] {
    if (!this.openVideo) return [];
    return this.tutorials
      .filter(
        (t) =>
          t.id !== this.openVideo!.id &&
          t.category === this.openVideo!.category,
      )
      .slice(0, 3)
      .concat(
        this.tutorials.filter((t) => t.id !== this.openVideo?.id).slice(0, 3),
      )
      .slice(0, 3);
  }

  private readonly platformService = inject(PlatformService);
  private readonly seoService = inject(SeoService);

  constructor() {
    this.seoService.optimize({
      title: 'Learn Billinox — Tutorials & Guides',
      meta: [
        {
          name: 'description',
          content:
            'Step-by-step tutorials, setup guides, and business billing tips to help you get the most out of Billinox.',
        },
        { property: 'og:title', content: 'Billinox Guides & Tutorials' },
        {
          property: 'og:description',
          content:
            'Watch curated YouTube tutorials and master Billinox in minutes.',
        },
        { property: 'twitter:title', content: 'Billinox Guides & Tutorials' },
        {
          property: 'twitter:description',
          content:
            'Watch curated YouTube tutorials and master Billinox in minutes.',
        },
      ],
    });

    if (this.platformService.isBrowser) {
      this.bookmarks = new Set(
        JSON.parse(localStorage.getItem(this.bookmarkKey) || '[]'),
      );
    }
  }

  ngOnInit(): void {
    this.search$.pipe(debounceTime(500)).subscribe((query) => {
      this.filteredTutorials = this.tutorials.filter((tut) => {
        const matchesCategory =
          this.active === 'All' || tut.category === this.active;
        const matchesQuery =
          tut.title.toLowerCase().includes(query.toLowerCase()) ||
          tut.description.toLowerCase().includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
      });
    });
  }

  search(query: string): void {
    this.search$.next(query);
  }

  setActive(category: (typeof GuideCategories)[number]): void {
    this.active = category;
    this.filteredTutorials = this.tutorials.filter((tut) => {
      const matchesCategory = category === 'All' || tut.category === category;
      return matchesCategory;
    });
  }

  setOpenVideo(tutorial: Tutorial | null): void {
    this.openVideo = tutorial;
  }

  subscribe() {
    window.open(
      'https://www.youtube.com/channel/UCaCUv3YIIdq_EuG3ltXSHUQ?sub_confirmation=1',
      '_blank',
    );
  }

  browseTutorials() {
    window.open('https://www.youtube.com/@Billinox/playlists', '_blank');
  }
}
