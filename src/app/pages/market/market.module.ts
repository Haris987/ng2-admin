import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { CKEditorModule } from 'ng2-ckeditor';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './market.routing';
import { Market } from './market.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MarketService } from './market.service';

@NgModule({
  imports: [
    TabsModule.forRoot(),
    NgaModule,
    routing
  ],
  declarations: [
    Market
  ],
  exports: [Market],
  providers: [MarketService]
})
export class MarketModule {
}
