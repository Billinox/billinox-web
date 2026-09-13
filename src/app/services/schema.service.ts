import { DOCUMENT, inject, Injectable, RendererFactory2 } from '@angular/core';
import { FaqItem } from '../models/faq.model';

@Injectable({
  providedIn: 'root',
})
export class SchemaService {
  private document = inject(DOCUMENT);
  private rendererFactory = inject(RendererFactory2);
  private renderer = this.rendererFactory.createRenderer(null, null);

  injectFaqSchema(faqData: FaqItem[]): void {
    const schemaJson = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqData.map(item => ({
        '@type': 'Question',
        'name': item.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': item.answer
        }
      }))
    };
    const oldScript = this.document.getElementById('faq-json-ld');
    if (oldScript) {
      this.renderer.removeChild(this.document.head, oldScript);
    }
    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'id', 'faq-json-ld');
    this.renderer.setAttribute(script, 'type', 'application/ld+json');
    this.renderer.setProperty(script, 'text', JSON.stringify(schemaJson));
    this.renderer.appendChild(this.document.head, script);
  }
}
