import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetPersonalInfoRoutingModule } from './set-personal-info-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SetPersonalInfoComponent } from './set-personal-info.component';

@NgModule({
  declarations: [SetPersonalInfoComponent],
  imports: [CommonModule, SetPersonalInfoRoutingModule, TranslateModule],
})
export class SetPersonalInfoModule {}
