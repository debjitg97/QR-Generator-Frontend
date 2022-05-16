import { Component, ElementRef, ViewChild } from '@angular/core';
import { QrGeneratorService } from './qr-generator.service';

const BACKEND_URL = 'https://qr-generator-backend.herokuapp.com';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  valid = false;
  url = '';
  shortenedUrl = '';
  qrCodeUrl = '';
  

  constructor(private qrGeneratorService: QrGeneratorService) { }

  update(): void {
    this.qrGeneratorService.getShortenedURLId(this.url).subscribe((result) => {
      this.shortenedUrl = result.shortenedUrl;
      this.qrCodeUrl = result.qrCodeUrl;
      this.valid = true;
    }, () => this.valid = false);
  }
}
