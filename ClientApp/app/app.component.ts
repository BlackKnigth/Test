import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from './data.service';
import { Topic } from './topic';
import { Form } from './form';
import { Mess } from './mess';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [DataService]
})
export class AppComponent implements OnInit {

    group: FormGroup = new FormGroup({
        name: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, [Validators.required, Validators.minLength(10)]),
        topic: new FormControl(null, Validators.required),
        mess: new FormControl(null, Validators.required),
        recaptcha: new FormControl(null, Validators.required)
    });
    form: Form = new Form; 
    outForm: Mess;
    topics: Topic[] = [];
    constructor(private dataService: DataService) { }

    ngOnInit() {
        //var boof = this.dataService.getTopics()
        //    .subscribe((data: Topic[]) => this.topics = data);
    }

    public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    onSubmit() {
        const controls = this.group.controls;

        if (this.group.invalid) {
            Object.keys(controls)
                .forEach(controlName => controls[controlName].markAsTouched());
            return; 
        }
        this.dataService.createMess(this.form).subscribe((data: number) => {
            this.dataService.getForm(data).subscribe((data: Mess) => {
                this.outForm = data;
                console.log(this.outForm);
                console.log(data);
            });
        });

        console.log(this.outForm);
    }
}