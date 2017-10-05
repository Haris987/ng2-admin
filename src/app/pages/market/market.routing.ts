import { Routes, RouterModule } from '@angular/router';

import { Market } from './market.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Market
  }
];

export const routing = RouterModule.forChild(routes);
