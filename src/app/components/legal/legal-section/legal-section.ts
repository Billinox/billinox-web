import {
  Component,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-legal-section',
  imports: [RouterLink],
  templateUrl: './legal-section.html',
  styleUrl: './legal-section.css',
})
export class LegalSection implements OnInit {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) title!: string;
  @ViewChild('content', { static: true }) contentRef!: TemplateRef<any>;

  public containerRef = inject(ViewContainerRef);

  ngOnInit() {
    this.containerRef.createEmbeddedView(this.contentRef);
    this.containerRef.element.nativeElement.remove();
  }
}
