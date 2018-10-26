import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, DocumentService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'document.component.html'
})

export class DocumentComponent {
    model: any = {};
    loading = false;
    dataSubmitted = false;
    formGroup = this.fb.group({
        file: [null, Validators.required]
      });

    constructor(
        private router: Router,
        private documentService: DocumentService,
        private alertService: AlertService,
        private fb: FormBuilder, 
        private cd: ChangeDetectorRef) { }

    onFileChange(event: any) {
        /* let reader = new FileReader();

        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);

            reader.onload = () => {
                this.formGroup.patchValue({
                    file: reader.result
                });
                console.log(event.target.files)
                // need to run CD since file load runs outside of zone
                this.cd.markForCheck();
            };
        } */
    }
    upload() {
        this.loading = true;
        this.documentService.create(this.model).subscribe(
            data => {
                console.log("data" ,this.model);
                this.alertService.success('Registration successful', true);
                this.loading =false;
                this.dataSubmitted =true;
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
        /*this.userService.create(this.model)
            .subscribe(
                data => {
                    console.log("data" ,this.model);
                    this.alertService.success('Registration successful', true);
                    this.loading =false;
                    this.dataSubmitted =true;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });*/
    }
}
