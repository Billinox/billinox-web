import { Component } from '@angular/core';
import {
  LucideActivity,
  LucideChartPie,
  LucideDynamicIcon,
  LucideFileCheckCorner,
  LucideWallet,
} from '@lucide/angular';

@Component({
  selector: 'app-showcase',
  imports: [LucideDynamicIcon],
  templateUrl: './showcase.html',
  styleUrl: './showcase.css',
})
export class Showcase {
  public items = [
    {
      icon: LucideChartPie,
      title: 'Invoice analytics dashboard',
      desc: 'A real-time pulse of your business — revenue, outstanding, and trends in one view.',
    },
    {
      icon: LucideActivity,
      title: 'Revenue charts that breathe',
      desc: 'Beautiful, animated charts that turn raw numbers into clear decisions.',
    },
    {
      icon: LucideFileCheckCorner,
      title: 'Invoice preview, instantly',
      desc: 'See every detail of your invoice before it goes out — pixel-perfect, every time.',
    },
    {
      icon: LucideWallet,
      title: 'Payment tracking',
      desc: "Know who paid, who hasn't, and what to follow up on — automatically.",
    },
  ];

  public chartData = [42, 58, 50, 70, 64, 80, 72, 88, 78, 92, 84, 96];
  public stats = [
    { l: 'Paid', v: '$98.2k', c: 'bg-emerald-500' },
    { l: 'Pending', v: '$22.1k', c: 'bg-amber-500' },
    { l: 'Overdue', v: '$8.1k', c: 'bg-rose-500' },
  ];
}
