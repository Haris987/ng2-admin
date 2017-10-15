import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegisterFormConfig } from './register.form';
import { FormlyFieldConfig } from 'ng-formly'
import { User } from '../../auth/user.interface';
import { RegisterService } from './register.service';

@Component({
	selector: 'register',
	templateUrl: './register.html',
	styleUrls: ['./register.scss']
})
export class Register {

	@ViewChild('form') form;
	errorMessage = false;
	successMessage = false;
	registerForm: FormGroup;
	registerFields: FormlyFieldConfig;

	userModel = {};

	constructor(public formConfig: RegisterFormConfig, private fb: FormBuilder, private service: RegisterService) {
		this.registerForm = fb.group({});
		this.registerFields = this.formConfig.build();
	}

	onSubmit(user: User) {
		if (this.registerForm.valid) {
			this.service.register(user)
				.subscribe(
					(res: any) => {
						if (res.status === "OK") {
							this.successMessage = res.message;
							this.errorMessage = false;
							this.registerForm.reset({
								userName: '',
								firstName: '',
								lastName: '',
								email: '',
								password: ''
							});
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
