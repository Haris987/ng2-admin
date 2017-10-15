import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginFormConfig } from './login.form';
import { FormlyFieldConfig } from 'ng-formly'
import { User } from '../../auth/user.interface';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'login',
	templateUrl: './login.html',
	styleUrls: ['./login.scss']
})
export class Login {

	@ViewChild('form') form;
	errorMessage = false;
	successMessage = false;
	loginForm: FormGroup;
	loginFields: FormlyFieldConfig;

	userModel = {};

	options = {
		formState: {
			submitted : true
		}
	};

	constructor(public formConfig: LoginFormConfig, private fb: FormBuilder, private service: AuthService, private router: Router) {
		this.loginForm = fb.group({});
		this.loginFields = this.formConfig.build();
	}

	onSubmit(user: User) {
		if (this.loginForm.valid) {
			this.service.login(user)
				.subscribe(
					(res: any) => {
						if (res.status === "OK") {
							this.service.setSession();
							this.router.navigate(['/pages/dashboard']);
						}
					},
					(_res: any) => {
						let res = _res.json();
						this.errorMessage = res.error.errorMessage;
						this.successMessage = false;
					}
				);
		}
	}
}