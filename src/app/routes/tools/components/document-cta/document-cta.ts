import { Component, DOCUMENT, inject, Input } from '@angular/core';
import { GeneratePDFRequest } from '@billinox/src/app/models/generate-pdf.model';
import { DocumentStateService } from '@billinox/src/app/services/document-state.service';
import { NgIcon } from '@ng-icons/core';
import {
  lucideCloudDownload,
  lucideReceiptText,
  lucideSend,
  lucideShare,
} from '@ng-icons/lucide';
import { HlmButton } from '@spartan-ng/helm/button';
import { toast } from '@spartan-ng/brain/sonner';
import { CurrencyPipe } from '@angular/common';
import { DocumentService } from '@billinox/src/app/services/document.service';
import { finalize } from 'rxjs';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';
import { environment } from '@billinox/src/environments/environment';
import { formatDate } from 'date-fns';

@Component({
  selector: 'app-document-cta',
  imports: [NgIcon, HlmButton, HlmSpinnerImports],
  templateUrl: './document-cta.html',
  styleUrl: './document-cta.css',
})
export class DocumentCTA {
  @Input() label!: string;
  public lucideReceiptText = lucideReceiptText;
  public lucideCloudDownload = lucideCloudDownload;
  public lucideShare = lucideShare;
  public processing = false;
  public selectedContext?: 'download' | 'share' | null;
  public documentData?: { filename: string; pdf: string };

  private _document = inject(DOCUMENT);
  private _documentStateService = inject(DocumentStateService);
  private _documentService = inject(DocumentService);

  private formatMoney(amount: number, code: string) {
    const currencyPipe = new CurrencyPipe('en');
    return currencyPipe.transform(amount, code, 'symbol-narrow')!;
  }

  private formatDate(date: Date) {
    // return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED);
    return formatDate(date, 'MMM d, y');
  }

  private loadBackground(image: string): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${environment.baseUrl}${image}`);
        const data = await response.blob();
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target?.result as string;
          console.log(result);
          return resolve(result);
        };
        reader.readAsDataURL(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  private dataUriToFile(dataUri: string, fileName: string): File {
    const arr = dataUri.split(',');
    const mimeMatch = arr[0].match(/:(.*?);/);
    const mime = mimeMatch ? mimeMatch[1] : 'application/pdf';

    // Decode base64 string to a binary array representation
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], fileName, { type: mime });
  }

  private async prepareRequest(): Promise<GeneratePDFRequest> {
    const state = this._documentStateService.state();
    const template = state.template;
    const theme = template.theme;
    const code = state.currency.code;

    if (!state.business) {
      throw new Error('Business details not provided');
    }

    if (!state.customer) {
      throw new Error('Customer details not provided');
    }

    if (!state.items.length) {
      throw new Error('Add at least 1 item');
    }

    if (!state.business) {
      throw new Error('Business details not provided');
    }

    if (!state.paymentAccount) {
      throw new Error('Payment method not provided');
    }

    const total = this.formatMoney(state.total, code);

    return {
      content: {
        balance: total,
        business: state.business!,
        customer: state.customer!,
        discount: this.formatMoney(state.discountAmount, code),
        discountPercentage: state.discount,
        documentNo: state.documentNo,
        dueDate: this.formatDate(state.dueDate),
        issuedAt: this.formatDate(state.issuedDate),
        items: state.items.map((d) => ({
          description: d.description,
          price: this.formatMoney(d.price, code),
          quantity: d.quantity,
          subtotal: this.formatMoney(d.subtotal, code),
        })),
        paid: this.formatMoney(0, code),
        paymentAccount: state.paymentAccount,
        shippingCost: this.formatMoney(state.shippingCost, code),
        signature: state.signature,
        subtotal: this.formatMoney(state.subtotal, code),
        taxes: state.taxes.map((d) => ({
          name: d.name,
          percentage: d.percentage,
          amount: this.formatMoney(
            Number((state.subtotal * (d.percentage / 100)).toFixed(2)),
            code,
          ),
        })),
        terms: state.terms,
        theme: {
          background: {
            image:
              theme.background.type === 'image'
                ? await this.loadBackground(theme.background.value)
                : undefined,
            color:
              theme.background.type === 'color'
                ? theme.background.value
                : undefined,
          },
          primaryColor: theme.primaryColor,
          table: {
            totalRowBackgroundColor: theme.table.totalBackgroundColor,
            totalRowTextColor: theme.table.totalTextColor,
            headerBackgroundColor: theme.table.headerBackgroundColor,
            headerTextColor: theme.table.headerTextColor,
          },
        },
        title: state.title,
        total,
      },
      type: template.type,
    };
  }

  async submit(context: 'download' | 'share' = 'download'): Promise<void> {
    if (this.processing) return;
    this.processing = true;
    this.selectedContext = context;

    try {
      const request = await this.prepareRequest();
      const filename = `${request.content.customer.name}-${request.content.documentNo}.pdf`;

      this._documentService
        .generatePDF(request)
        .pipe(
          finalize(() => {
            this.processing = false;
            this.selectedContext = null;
          }),
        )
        .subscribe({
          next: (response) => {
            this.documentData = { pdf: response.pdf, filename };

            switch (context) {
              case 'download':
                this.download();
                break;
              // case 'share':
              //   this.share(response.pdf, filename);
              //   break;
              default:
                break;
            }
          },
          error: (error) => {
            toast.error(error.message);
          },
        });
    } catch (error: any) {
      toast.error(error.message);
      this.processing = false;
      this.selectedContext = null;
    }
  }

  download(): void {
    if (!this.documentData) {
      return;
    }

    const anchor = this._document.createElement('a');
    anchor.href = this.documentData.pdf;
    anchor.download = this.documentData.filename;

    this._document.body.appendChild(anchor);
    anchor.click();
    this._document.body.removeChild(anchor);
  }

  async share() {
    if (!this.documentData) {
      return;
    }

    try {
      const file = this.dataUriToFile(
        this.documentData.pdf,
        this.documentData.filename,
      );
      const filesArray = [file];

      if (navigator.canShare && navigator.canShare({ files: filesArray })) {
        await navigator.share({
          files: filesArray,
          title: 'Invoice',
          text: 'Here is your invoice. thanks for your patronage.',
        });
      } else {
        this.download();
      }
    } catch (error) {
      console.error('An error occurred during native sharing:', error);
      toast.error('Failed to share');
    }
  }
}
