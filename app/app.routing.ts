﻿import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { DocumentComponent } from './document/index';
import { RegisterComponent } from './register/index';


const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'document', component: DocumentComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);