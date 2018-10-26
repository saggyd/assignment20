import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { ErrorInterceptorProvider } from './_helpers/index';
import { AlertService, UserService, DocumentService } from './_services/index';
import { HomeComponent } from './home/index';

import { RegisterComponent } from './register/index';
import { DocumentComponent } from './document/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        DocumentComponent,
        RegisterComponent
    ],
    providers: [
        AlertService,
        UserService,
        DocumentService,
        ErrorInterceptorProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }