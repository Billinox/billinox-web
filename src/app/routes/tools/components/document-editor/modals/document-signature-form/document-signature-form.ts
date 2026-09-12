import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  HlmDialogFooter,
  HlmDialogHeader,
  HlmDialogTitle,
} from '@billinox/src/app/components/uis/dialog/src';
import { HlmFieldImports } from '@billinox/src/app/components/uis/field/src';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import { BrnDialogRef } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-document-signature-form',
  imports: [
    HlmButton,
    HlmDialogHeader,
    HlmDialogTitle,
    HlmDialogFooter,
    HlmButton,
    HlmFieldImports,
    HlmInput,
    ReactiveFormsModule
  ],
  templateUrl: './document-signature-form.html',
  styleUrl: './document-signature-form.css',
})
export class DocumentSignatureForm implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('canvasElement', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  public labelControl = new FormControl<string | undefined>('Authorize Sign');

  private signaturePad!: SignaturePad;
  private resizeObserver!: ResizeObserver;
  private readonly _documentStateService = inject(DocumentStateService);
  private readonly _dialogRef =
    inject<BrnDialogRef<DocumentSignatureForm>>(BrnDialogRef);

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;

    this.signaturePad = new SignaturePad(canvas, {
      minWidth: 1,
      maxWidth: 4.5,
      penColor: '#0f172a',
    });

    const state = this._documentStateService.state();
    const data = state.signature?.points;
    if (data) { this.signaturePad.fromData(data); }

    this.setupResponsiveCanvas(canvas);
  }

  ngOnInit(): void {
    const state = this._documentStateService.state();
    this.labelControl.patchValue(state.signature?.label);
  }

  save(): void {
    if (this.signaturePad.isEmpty()) {
      this._documentStateService.removeSignature();
      this._dialogRef.close();
      return;
    }

    const base64Image = this.signaturePad.toDataURL('image/png');
    this._documentStateService.saveSignature(
      {
        image: base64Image,
        label: this.labelControl.value || 'Authorize Sign',
        points: this.signaturePad.toData()
      }
    );
    this._dialogRef.close();
  }

  public clear(): void {
    this.signaturePad.clear();
  }

  private setupResponsiveCanvas(canvas: HTMLCanvasElement): void {
    this.resizeObserver = new ResizeObserver(() => {
      const rect = canvas.getBoundingClientRect();

      const ratio = Math.max(window.devicePixelRatio || 1, 1);

      const currentData = this.signaturePad.toData();

      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(ratio, ratio);
      }

      this.signaturePad.clear();
      this.signaturePad.fromData(currentData);
    });

    this.resizeObserver.observe(canvas);
  }

  ngOnDestroy(): void {
    this.resizeObserver.disconnect();
  }
}
