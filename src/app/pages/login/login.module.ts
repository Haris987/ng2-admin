import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Validators } from '@angular/forms';
import { Login } from './login.component';
import { routing }       from './login.routing';
import { FormlyModule, FormlyBootstrapModule } from 'ng-formly';
import { LoginFormConfig } from './login.form';


@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
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
    FormlyBootstrapModule,
    routing
  ],
  providers: [
    LoginFormConfig,
  ],
  declarations: [
    Login
  ]
})
export class LoginModule {}
