import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';
import { RecaptchaModule, RecaptchaFormsModule  } from 'ng-recaptcha';


import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, TextMaskModule, RecaptchaModule, RecaptchaFormsModule ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
