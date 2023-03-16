import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { HeaderMenuModule } from '../../components/header-menu/header-menu.module';
import { StaticFooterModule } from '../../components/static-footer/static-footer.module';
import { SideBarModule } from '../../components/side-bar/side-bar.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SideBarModule,
    HeaderMenuModule,
    StaticFooterModule,
  ],
})
export class LayoutModule {}
