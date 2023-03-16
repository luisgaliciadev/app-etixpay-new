import { Component } from '@angular/core';
import { TranslateLangService } from './shared/services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'etixpay-app';

  constructor(private translateLangService: TranslateLangService) {}
}
