import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateLangService {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en', 'ro', 'it']);
    const lenguaje = {
      id: 0,
      len: 'it',
    };
    localStorage.setItem('lenguaje', JSON.stringify(lenguaje));
    this.translate.use(lenguaje.len);
  }
}
