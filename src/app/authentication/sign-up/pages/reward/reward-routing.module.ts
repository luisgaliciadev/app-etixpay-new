import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RewardComponent } from './reward.component';

const routes: Routes = [
  {
    path: '',
    component: RewardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RewardRoutingModule {}
