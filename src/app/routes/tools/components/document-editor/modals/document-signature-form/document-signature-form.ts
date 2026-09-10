import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  HlmDialogFooter,
  HlmDialogHeader,
  HlmDialogTitle,
} from '@billinox/src/app/components/uis/dialog/src';
import { HlmButton } from '@spartan-ng/helm/button';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-document-signature-form',
  imports: [
    HlmButton,
    HlmDialogHeader,
    HlmDialogTitle,
    HlmDialogFooter,
    HlmButton,
  ],
  templateUrl: './document-signature-form.html',
  styleUrl: './document-signature-form.css',
})
export class DocumentSignatureForm implements AfterViewInit, OnDestroy {
  @ViewChild('canvasElement', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private signaturePad!: SignaturePad;
  private resizeObserver!: ResizeObserver;

  public ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;

    // 2. Initialize SignaturePad with your custom configurations
    this.signaturePad = new SignaturePad(canvas, {
      minWidth: 1,
      maxWidth: 4.5,
      penColor: '#0f172a',
    });

    // 3. Make the pad perfectly responsive using a ResizeObserver
    this.setupResponsiveCanvas(canvas);
  }

  saveSignature(): void {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
      return;
    }

    const base64Image = this.signaturePad.toDataURL('image/png');
    console.log('Angular Signature String:', base64Image);
    // You can now emit this string via an @Output() or pass it to an Angular Service
  }

  public clear(): void {
    this.signaturePad.clear();
  }

  private setupResponsiveCanvas(canvas: HTMLCanvasElement): void {
    this.resizeObserver = new ResizeObserver(() => {
      // 1. Get the exact bounding box size of the canvas display layout
      const rect = canvas.getBoundingClientRect();

      // 2. Account for High-DPI / Retina screens
      const ratio = Math.max(window.devicePixelRatio || 1, 1);

      // 3. Save existing signature strokes before resizing resets the grid
      const currentData = this.signaturePad.toData();

      // 4. CRUCIAL: Synchronize core drawing pixels with CSS bounding dimensions
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;

      // 5. Scale the 2D rendering grid back down so the library draws accurately
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(ratio, ratio);
      }

      // 6. Reset pad boundaries and re-render previous strokes
      this.signaturePad.clear();
      this.signaturePad.fromData(currentData);
    });

    // Watch the canvas element directly
    this.resizeObserver.observe(canvas);
  }

  ngOnDestroy(): void {
    this.resizeObserver.disconnect();
  }
}
