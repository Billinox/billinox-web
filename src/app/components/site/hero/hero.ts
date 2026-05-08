import { Component } from '@angular/core';
import {
  LucideArrowRight,
  LucidePlay,
  LucideShieldCheck,
  LucideWifiOff,
  LucideRefreshCw,
} from '@lucide/angular';
import { DashboardMockup } from '../dashboard-mockup/dashboard-mockup';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-hero',
  imports: [
    LucideArrowRight,
    DashboardMockup,
    HlmButton,
    LucidePlay,
    LucideShieldCheck,
    LucideWifiOff,
    LucideRefreshCw,
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
