import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Register } from './register.component';
import { routing } from './register.routing';
import { FormlyModule, FormlyBootstrapModule } from 'ng-formly';
import { RegisterFormConfig } from './register.form';
import { RegisterService } from './register.service';
import { Validators } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		FormlyBootstrapModule,
		NgaModule,
		routing,
		FormlyModule.forRoot({
			validators: [{ name: 'required', validation: Validators.required }],
			validationMessages: [
				{ name: 'required', message: (err, field) => `${field.templateOptions.label} is required.` },
				{ name: 'invalidEmailAddress', message: 'Invalid Email Address' },
				{ name: 'maxlength', message: 'Maximum Length Exceeded.' },
				{
					name: 'minlength', message: (err) => {
					return `Should have atleast ${err.requiredLength} Characters`;
				},
				},
			]
		}),
	],
	providers: [
		RegisterFormConfig,
		RegisterService
	],
	declarations: [
		Register
	]
})
export class RegisterModule {
}
