import { Injectable } from '@angular/core';
import { endpoint } from '../../config';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from './user.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {
	private url = endpoint + 'users/login';
	token: string = '';

	constructor(private http: Http, private router: Router) {
		// var currentUser = JSON.parse(localStorage.getItem('currentUser'));
		// this.token = currentUser && currentUser.token;
	}

	login(user: User): Observable<Response> {
		let headers = new Headers();
		this.token = btoa(user.userName + ':' + user.password);
		// headers.append( 'Content-Type', 'application/json' );
		headers.append('Authorization', 'Basic ' + this.token);

		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.url, null, options)
			.map(this.extractData)
	}

	setSession() {
		localStorage.setItem('currentUser', this.token);
	}

	logout() {
		this.token = '';
		localStorage.removeItem('currentUser');
	}

	private extractData(res: Response) {
		let body = res.json();
		console.log('tes');
		return body ? body : {};
	}
}