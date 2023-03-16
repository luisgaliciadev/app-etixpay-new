import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplashRoutingModule } from './splash-routing.module';
import { SplashComponent } from './splash.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SplashComponent],
  imports: [CommonModule, SplashRoutingModule, TranslateModule],
})
export class SplashModule {}
