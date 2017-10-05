import {Component} from '@angular/core';
import { MarketService } from './market.service';

@Component({
  selector: 'market',
  templateUrl: `./market.html`
})
export class Market {
    data:any
    constructor(private _chartistJsService:MarketService) {
 	}

    ngOnInit() {
 		this.data = this._chartistJsService.getAll();
 	}
}
