import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal-callout',
  imports: [NgClass],
  templateUrl: './legal-callout.html',
  styleUrl: './legal-callout.css',
})
export class LegalCallout implements OnInit {
  @Input() tone: 'warning' | 'success' = 'warning';
  @Input() title?: string;
  public styles!: string;

  ngOnInit(): void {
    this.styles =
      this.tone === 'warning'
        ? 'border-primary/40 bg-primary/10'
        : this.tone === 'success'
          ? 'border-emerald-500/30 bg-emerald-500/5'
          : 'border-border bg-surface';
  }
}
