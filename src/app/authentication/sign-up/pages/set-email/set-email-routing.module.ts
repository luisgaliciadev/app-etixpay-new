import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetEmailComponent } from './set-email.component';

const routes: Routes = [
  {
    path: '',
    component: SetEmailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetEmailRoutingModule {}
