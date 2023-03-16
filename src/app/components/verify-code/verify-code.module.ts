import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyCodeRoutingModule } from './verify-code-routing.module';
import { VerifyCodeComponent } from './verify-code.component';
import { TranslateModule } from '@ngx-translate/core';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [VerifyCodeComponent],
  imports: [
    CommonModule,
    VerifyCodeRoutingModule,
    TranslateModule,
    CountdownModule,
  ],
  exports: [VerifyCodeComponent],
})
export class VerifyCodeModule {}
