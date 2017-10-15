import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from 'ng-formly';
import { Validators } from '@angular/forms';

@Injectable()
export class RegisterFormConfig {

	build() {

		let fields: FormlyFieldConfig = [
			{
				key: 'userName',
				type: 'input',
				className: 'col-12',
				templateOptions: {
					label: 'User Name',
				},
				validators: {
					validation: Validators.compose([Validators.required])
				}
			},
			{
				key: 'firstName',
				className: 'col-6',
				type: 'input',
				templateOptions: {
					label: 'First Name',
				},
				validators: {
					validation: Validators.compose([Validators.required])
				}
			},
			{
				key: 'lastName',
				className: 'col-6',
				type: 'input',
				templateOptions: {
					label: 'Last Name',
				},
				validators: {
					validation: Validators.compose([Validators.required])
				}
			},
			{
				key: 'email',
				type: 'input',
				className: 'col-12',
				templateOptions: {
					type: 'email',
					label: 'Email address',
				},
				validators: {
					validation: Validators.compose([Validators.required, Validators.email])
				}
			}, {
				key: 'password',
				type: 'input',
				className: 'col-12',
				templateOptions: {
					type: 'password',
					label: 'Password',
				},
				validators: {
					validation: Validators.compose([Validators.required, Validators.minLength(6)])
				}
			}
		];

		return fields;
	}
}