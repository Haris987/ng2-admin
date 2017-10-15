import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from 'ng-formly';
import { Validators } from '@angular/forms';

@Injectable()
export class LoginFormConfig {

	build() {

		let fields: FormlyFieldConfig = [
			{
				key: 'userName',
				type: 'input',
				className: 'col-12',
				templateOptions: {
					required: true,
					label: 'User name',
				},
				validators: {
					validation: Validators.required
				}
			}, {
				key: 'password',
				type: 'input',
				className: 'col-12',
				templateOptions: {
					type: 'password',
					label: 'Password',
					required: true,
				},
				validators: {
					validation: Validators.compose([Validators.required])
				}
			}
		];

		return fields;
	}
}