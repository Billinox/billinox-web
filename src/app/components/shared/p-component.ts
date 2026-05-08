import { Component } from '@angular/core';

@Component({
  selector: 'app-p',
  standalone: true,
  template: `
    <p class="text-muted-foreground">
      <ng-content />
    </p>
  `,
})
export class PComponent {}
