import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Pages } from './pages.component';
import { AuthGuard } from '../auth/auth.guard';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing],
  providers: [AuthGuard],
  declarations: [Pages]
})
export class PagesModule {
}
