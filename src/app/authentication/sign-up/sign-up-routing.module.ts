import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { PageNotFoundModule } from '../../home/page-not-found/page-not-found.module';

const routes: Routes = [
  {
    path: 'set-email',
    loadChildren: () =>
      import('./pages/set-email/set-email.module').then(
        (m) => m.SetEmailModule
      ),
  },
  {
    path: 'check-code/:type',
    loadChildren: () =>
      import('./pages/check-code/check-code.module').then(
        (m) => m.CheckCodeModule
      ),
  },
  {
    path: 'set-personal-info',
    loadChildren: () =>
      import('./pages/set-personal-info/set-personal-info.module').then(
        (m) => m.SetPersonalInfoModule
      ),
  },
  {
    path: 'set-credentials',
    loadChildren: () =>
      import('./pages/set-credentials/set-credentials.module').then(
        (m) => m.SetCredentialsModule
      ),
  },
  {
    path: 'promo-code',
    loadChildren: () =>
      import('./pages/promo-code/promo-code.module').then(
        (m) => m.PromoCodeModule
      ),
  },
  {
    path: 'reward',
    loadChildren: () =>
      import('./pages/reward/reward.module').then((m) => m.RewardModule),
  },
  {
    path: '',
    redirectTo: 'set-email',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'set-email',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpRoutingModule {}
