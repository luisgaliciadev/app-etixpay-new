import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetCredentialsRoutingModule } from './set-credentials-routing.module';
import { SetCredentialsComponent } from './set-credentials.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SetCredentialsComponent],
  imports: [CommonModule, SetCredentialsRoutingModule, TranslateModule],
})
export class SetCredentialsModule {}
