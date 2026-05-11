import { inject, Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  optimize({
    title,
    meta,
  }: {
    title?: string;
    meta: MetaDefinition[];
  }) {
    if (title) {
      this.titleService.setTitle(title);
    }
    for (const tag of meta) {
      this.metaService.updateTag(tag);
    }
  }
}
