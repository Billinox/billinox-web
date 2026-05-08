import { Component } from '@angular/core';

@Component({
  selector: 'app-ul',
  template: `
    <ul
      class="list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-primary"
    >
      <ng-content />
    </ul>
  `,
})
export class ULComponent {}

