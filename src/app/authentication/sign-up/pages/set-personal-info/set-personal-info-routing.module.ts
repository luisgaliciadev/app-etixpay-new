import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetPersonalInfoComponent } from './set-personal-info.component';

const routes: Routes = [
  {
    path: '',
    component: SetPersonalInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetPersonalInfoRoutingModule {}
