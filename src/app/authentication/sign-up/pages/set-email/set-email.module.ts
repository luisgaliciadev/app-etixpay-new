import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetEmailRoutingModule } from './set-email-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SetEmailComponent } from './set-email.component';

@NgModule({
  declarations: [SetEmailComponent],
  imports: [CommonModule, SetEmailRoutingModule, TranslateModule],
})
export class SetEmailModule {}
