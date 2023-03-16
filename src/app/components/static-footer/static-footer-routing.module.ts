import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticFooterComponent } from './static-footer.component';

const routes: Routes = [
  {
    path: '',
    component: StaticFooterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaticFooterRoutingModule {}
