var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from './data.service';
import { Form } from './form';
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.group = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            phone: new FormControl(null, [Validators.required, Validators.minLength(10)]),
            topic: new FormControl(null, Validators.required),
            mess: new FormControl(null, Validators.required),
            recaptcha: new FormControl(null, Validators.required)
        });
        this.form = new Form;
        this.topics = [];
        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
    AppComponent.prototype.ngOnInit = function () {
        //var boof = this.dataService.getTopics()
        //    .subscribe((data: Topic[]) => this.topics = data);
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        var controls = this.group.controls;
        if (this.group.invalid) {
            Object.keys(controls)
                .forEach(function (controlName) { return controls[controlName].markAsTouched(); });
            return;
        }
        this.dataService.createMess(this.form).subscribe(function (data) {
            _this.dataService.getForm(data).subscribe(function (data) {
                _this.outForm = data;
                console.log(_this.outForm);
                console.log(data);
            });
        });
        console.log(this.outForm);
    };
    AppComponent = __decorate([
        Component({
            selector: 'app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map