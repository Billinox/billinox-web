import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@billinox/src/environments/environment';
import { Observable, shareReplay } from 'rxjs';
import {
  GeneratePDFRequest,
  GeneratePDFResponse,
} from '../models/generate-pdf.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private _http = inject(HttpClient);

  generatePDF(request: GeneratePDFRequest): Observable<GeneratePDFResponse> {
    return this._http
      .post<GeneratePDFResponse>(`${environment.apiUrl}/pdf`, request)
      .pipe(shareReplay(1000, 100));
  }
}
