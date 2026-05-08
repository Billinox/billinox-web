import { Component } from '@angular/core';
import { LucideZap, LucideWifiOff, LucideWandSparkles, LucideTimer, LucideSparkles, LucideShieldCheck, LucideDynamicIcon } from '@lucide/angular';

@Component({
  selector: 'app-benefits',
  imports: [LucideDynamicIcon],
  templateUrl: './benefits.html',
  styleUrl: './benefits.css',
})
export class Benefits {
  public benefits = [
    {
      icon: LucideZap,
      title: 'Fast and easy',
      desc: 'Send your first invoice in under 60 seconds.',
    },
    {
      icon: LucideWifiOff,
      title: 'Works without internet',
      desc: 'Keep working anywhere — sync resumes automatically.',
    },
    {
      icon: LucideShieldCheck,
      title: 'Secure cloud backup',
      desc: 'Encrypted backups across regions, restore in one tap.',
    },
    {
      icon: LucideSparkles,
      title: 'Modern by design',
      desc: 'A workspace that finally feels like the rest of your tools.',
    },
    {
      icon: LucideTimer,
      title: 'Saves hours every week',
      desc: 'Automations remove repetitive billing busywork.',
    },
    {
      icon: LucideWandSparkles,
      title: 'Simple but powerful',
      desc: 'Friendly for first-timers, deep enough for pros.',
    },
  ];
}
