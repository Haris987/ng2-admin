import { Injectable } from '@angular/core';
import { BaThemeConfigProvider} from '../../theme';
 
@Injectable()
export class MarketService {

	private _data = {
		areaLineData: {
			labels: [1, 2, 3, 4, 5, 6, 7, 8],
			series: [
				[5, 9, 7, 8, 5, 3, 5, 4]
			]
		}
	}

	public getAll() {
		return this._data;
	}
}
