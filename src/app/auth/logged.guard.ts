import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoggedGuard {

	constructor(private router: Router) { }

	canActivate() {
		if (localStorage.getItem('currentUser')) {
			this.router.navigate(['/pages/dashboard']);
			return false;
		}

		return true;
	}

}