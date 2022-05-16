import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BACKEND_URL = 'https://qr-generator-backend.herokuapp.com';


@Injectable({
  providedIn: 'root'
})
export class QrGeneratorService {

  constructor(private httpClient: HttpClient) { }

  getShortenedURLId(url: string): Observable<{ shortenedUrl: string, qrCodeUrl: string }> {
    return this.httpClient.post<{ shortenedUrl: string, qrCodeUrl: string }>(`${BACKEND_URL}/v1/shorten-url/shorten`, { url })
  }
}
