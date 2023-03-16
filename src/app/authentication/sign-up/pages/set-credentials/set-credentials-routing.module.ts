import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetCredentialsComponent } from './set-credentials.component';

const routes: Routes = [
  {
    path: '',
    component: SetCredentialsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetCredentialsRoutingModule {}
