import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LucideMenu, LucideX } from '@lucide/angular';
import { HlmButton } from '@spartan-ng/helm/button';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, LucideMenu, LucideX, HlmButton, NgIconComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit, OnDestroy {
  public links = [
    { href: '#features', label: 'Features' },
    { href: '#showcase', label: 'Product' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
  ];

  public scrolled = false;
  public open = false;

  onScroll = () => (this.scrolled = window.scrollY > 12);

  setOpen(value: boolean) {
    this.open = value;
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }
}
