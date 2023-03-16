import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoCodeRoutingModule } from './promo-code-routing.module';
import { PromoCodeComponent } from './promo-code.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PromoCodeComponent],
  imports: [CommonModule, PromoCodeRoutingModule, TranslateModule],
})
export class PromoCodeModule {}
