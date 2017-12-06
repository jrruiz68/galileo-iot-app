import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Http} from '@angular/http';
import {environment} from "./environment";



@Injectable()
export class HTTPService {

    private apiRoot = environment.apiUrl;

    private action: string;

    constructor(private http: Http) {
        console.log('Servicio HTTP Constructor')
    }


    setAction(httpAction: string) {
        this.action = httpAction;
    }


    HTTP(params) {
        return this.http.post(this.apiRoot + this.action, params)
            .map(response => {
                return JSON.parse(response['_body']);
            }).catch(err => {
                this.processError(err.status);
                return Observable.throw(JSON.parse(err['_body']));
            });
    }

    processError(code) {
        if (code === 401) { // Not Login
            console.log('You not login');
        } else if (code === 402) { // Not Permission.
            console.log('You dont have permision');
        } else {
            console.log('Error', code);
        }
    }

}
