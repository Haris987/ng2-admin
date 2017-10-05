import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { CKEditorModule } from 'ng2-ckeditor';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './equity.routing';
import { Equity } from './equity.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    TabsModule.forRoot(),
    routing
  ],
  declarations: [
    Equity
  ],
  exports: [Equity]
})
export class EquityModule {
}
