import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticFooterRoutingModule } from './static-footer-routing.module';
import { StaticFooterComponent } from './static-footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StaticFooterComponent],
  imports: [CommonModule, StaticFooterRoutingModule, FormsModule],
  exports: [StaticFooterComponent],
})
export class StaticFooterModule {}
