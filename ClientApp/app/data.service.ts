import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from './form';
import { Topic } from './topic';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

    private url = "/api/user";
    boof: Object = new Object;

    constructor(private http: HttpClient) { }

    getTopics() {
        //var i = this.http.get(this.url).map((response: Response) => response.json());
        //this.http.get/*<Topic[]>*/(this.url/*, { responseType: 'text', observe: 'response' }*/).subscribe(data =>

            //console.log(data);
            //Object.assign(this.boof, data);
            //Object.keys(data).map(function (key) {
            //    this.boof.push({ [key]: data[key] })
            //});
        //    console.log(this.boof);
        //});
        //console.log(this.boof);
            //return this.http.get(this.url);
    }

    getForm(id: number) {
        var a = this.http.get(this.url + "/" + id);
        console.log(a);
        return a;
    }

    createMess(form: Form) {
        return this.http.post(this.url, form);
    }
}