import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    dataSubmitted = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {

                    this.alertService.success('User ' + this.model.firstName + ' '+ this.model.lastName +
                    ' registered successfully.', true);
                    this.loading =false;
                    this.dataSubmitted =true;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
