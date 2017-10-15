import { Component } from '@angular/core';

import { GlobalState } from '../../../global.state';
import { AuthService } from '../../../auth/auth.service';

@Component({
	selector: 'ba-page-top',
	templateUrl: './baPageTop.html',
	styleUrls: ['./baPageTop.scss']
})
export class BaPageTop {

	public isScrolled: boolean = false;
	public isMenuCollapsed: boolean = false;

	constructor(private _state: GlobalState, public service: AuthService) {
		this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
			this.isMenuCollapsed = isCollapsed;
		});
	}

	logout($event){
		$event.preventDefault;
		this.service.logout();
	}
	public toggleMenu() {
		this.isMenuCollapsed = !this.isMenuCollapsed;
		this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
		return false;
	}

	public scrolledChanged(isScrolled) {
		this.isScrolled = isScrolled;
	}
}
