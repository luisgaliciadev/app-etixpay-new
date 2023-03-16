import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RewardRoutingModule } from './reward-routing.module';
import { RewardComponent } from './reward.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [RewardComponent],
  imports: [CommonModule, RewardRoutingModule, TranslateModule],
})
export class RewardModule {}
