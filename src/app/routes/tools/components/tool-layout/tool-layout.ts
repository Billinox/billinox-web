import { Component, Input } from '@angular/core';
import { Navbar } from '@billinox/src/app/components/site/navbar/navbar';
import { Footer } from '@billinox/src/app/components/site/footer/footer';
import { SafeHtmlPipe } from '@billinox/src/app/pipes/safe-html-pipe';

@Component({
  selector: 'app-tool-layout',
  imports: [Navbar, Footer, SafeHtmlPipe],
  templateUrl: './tool-layout.html',
  styleUrl: './tool-layout.css',
})
export class ToolLayout {
  @Input({ required: true }) tag!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
}
