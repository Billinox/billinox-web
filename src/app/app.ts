import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HlmToasterImports } from '@spartan-ng/helm/sonner';
import { LoadingBarModule } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HlmToasterImports, LoadingBarModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'billinox';
}
