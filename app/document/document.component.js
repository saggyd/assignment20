"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var index_1 = require("../_services/index");
var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(router, documentService, alertService, fb, cd) {
        this.router = router;
        this.documentService = documentService;
        this.alertService = alertService;
        this.fb = fb;
        this.cd = cd;
        this.model = {};
        this.loading = false;
        this.dataSubmitted = false;
        this.formGroup = this.fb.group({
            file: [null, forms_1.Validators.required]
        });
    }
    DocumentComponent.prototype.onFileChange = function (event) {
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
    };
    DocumentComponent.prototype.upload = function () {
        var _this = this;
        this.loading = true;
        this.documentService.create(this.model).subscribe(function (data) {
            console.log("data", _this.model);
            _this.alertService.success('Registration successful', true);
            _this.loading = false;
            _this.dataSubmitted = true;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
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
    };
    DocumentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'document.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.DocumentService,
            index_1.AlertService,
            forms_1.FormBuilder,
            core_1.ChangeDetectorRef])
    ], DocumentComponent);
    return DocumentComponent;
}());
exports.DocumentComponent = DocumentComponent;
//# sourceMappingURL=document.component.js.map