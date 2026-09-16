import { Component, inject, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';

import { HlmToasterImports } from '@spartan-ng/helm/sonner';
import { LoadingBarModule, LoadingBarService } from '@ngx-loading-bar/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HlmToasterImports, LoadingBarModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected title = 'billinox';

  private loadingBar = inject(LoadingBarService);
  private router = inject(Router);

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (e) =>
            e instanceof NavigationEnd ||
            e instanceof NavigationStart ||
            e instanceof NavigationCancel ||
            e instanceof NavigationError,
        ),
      )
      .subscribe((e) => {
        if (e instanceof NavigationStart) {
          this.loadingBar.useRef().start();
        }

        if (e instanceof NavigationEnd) {
          this.loadingBar.useRef().complete();
        }
      });
  }
}
