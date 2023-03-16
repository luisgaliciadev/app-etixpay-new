import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckCodeRoutingModule } from './check-code-routing.module';
import { VerifyCodeModule } from '../../../../components/verify-code/verify-code.module';
import { CheckCodeComponent } from './check-code.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CheckCodeComponent],
  imports: [
    CommonModule,
    CheckCodeRoutingModule,
    VerifyCodeModule,
    TranslateModule,
  ],
})
export class CheckCodeModule {}
