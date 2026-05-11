import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowRight } from '@lucide/angular';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-final-cta',
  imports: [LucideArrowRight, HlmButton, RouterLink],
  templateUrl: './final-cta.html',
  styleUrl: './final-cta.css',
})
export class FinalCta {}
