import { Injectable } from '@angular/core';
import { endpoint } from '../../../config';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../../auth/user.interface';
import { Observable } from 'rxjs';

@Injectable()

export class RegisterService {
	private url = endpoint + 'users/register';

	constructor(private http: Http) {
	}

	register(user: User): Observable<Response> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.url, user, options)
			.map(this.extractData)

	}

	private extractData(res: Response) {
		let body = res.json();
		console.log('tes');
		return body ? body : {};
	}
}