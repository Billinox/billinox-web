import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { environment } from '@billinox/src/environments/environment';
import { NgIcon } from '@ng-icons/core';
import { lucideApple } from '@ng-icons/lucide';

@Component({
  selector: 'app-store-badge',
  imports: [NgIcon, NgClass],
  templateUrl: './store-badge.html',
  styleUrl: './store-badge.css',
})
export class StoreBadge {
  @Input() store: 'play' | 'app' = 'play';
  @Input() size: 'sm' | 'lg' = 'lg';

  public lucideApple = lucideApple;
  get isPlay() {
    return this.store === 'play';
  }

  get link() {
    if (this.isPlay) {
      return environment.playStore;
    }

    // Return appstore URL
    return '';
  }
}
