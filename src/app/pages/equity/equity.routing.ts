import { Routes, RouterModule } from '@angular/router';

import { Equity } from './equity.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Equity
  }
];

export const routing = RouterModule.forChild(routes);
