import { Component } from '@angular/core';
import {
  LucideChartColumn,
  LucideClipboardList,
  LucideCloudUpload,
  LucideCreditCard,
  LucideDownload,
  LucideDynamicIcon,
  LucideFileText,
  LucideLayoutTemplate,
  LucideSmartphone,
  LucideUsers,
  LucideWifiOff,
} from '@lucide/angular';

@Component({
  selector: 'app-features',
  imports: [LucideDynamicIcon],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  public features = [
    {
      icon: LucideFileText,
      title: 'Professional invoices',
      desc: 'Generate beautiful, branded invoices in seconds.',
    },
    {
      icon: LucideLayoutTemplate,
      title: 'Invoice templates',
      desc: 'Pick from premium templates tailored for any business.',
    },
    {
      icon: LucideUsers,
      title: 'Customer management',
      desc: 'Organize clients, history, and contacts in one place.',
    },
    {
      icon: LucideCreditCard,
      title: 'Payment tracking',
      desc: 'Monitor paid, pending, and overdue invoices live.',
    },
    {
      icon: LucideClipboardList,
      title: 'Estimates & quotes',
      desc: 'Send quotes that convert into invoices instantly.',
    },
    {
      icon: LucideDownload,
      title: 'PDF export',
      desc: 'Download or share polished PDFs with one tap.',
    },
    {
      icon: LucideChartColumn,
      title: 'Analytics & reports',
      desc: 'Real-time insights into revenue, customers, taxes.',
    },
    {
      icon: LucideCloudUpload,
      title: 'Cloud backup',
      desc: 'End-to-end encrypted backups, restore anywhere.',
    },
    {
      icon: LucideSmartphone,
      title: 'Multi-device sync',
      desc: 'Pick up where you left off across phone, tablet, web.',
    },
    {
      icon: LucideWifiOff,
      title: 'Offline-first',
      desc: 'Work without internet — sync seamlessly when online.',
    },
  ];
}
