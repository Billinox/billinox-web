import { Component, Input } from '@angular/core';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';
import { SafeHtmlPipe } from '@billinox/src/app/pipes/safe-html-pipe';
import {
  MarkdownComponent,
  MARKED_EXTENSIONS,
  MARKED_OPTIONS,
  provideMarkdown,
} from 'ngx-markdown';
import { gfmHeadingId } from 'marked-gfm-heading-id';

@Component({
  selector: 'app-tool-faq',
  imports: [HlmAccordionImports, MarkdownComponent],
  templateUrl: './tool-faq.html',
  styleUrl: './tool-faq.css',
  providers: [
    provideMarkdown({
      markedOptions: {
        provide: MARKED_OPTIONS,
        useValue: {
          gfm: true,
          breaks: true,
          pedantic: false,
        },
      },
      markedExtensions: [
        {
          provide: MARKED_EXTENSIONS,
          useFactory: gfmHeadingId,
          multi: true,
        },
      ],
    }),
  ],
})
export class ToolFaq {
  @Input({ required: true }) public items!: {
    value: string;
    trigger: string;
    content: string;
  }[];
}
