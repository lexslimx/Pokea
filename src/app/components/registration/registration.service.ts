import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { IRegistrationInterface } from '../Interfaces/IRegistrationInterface';
import { IUser } from '../Interfaces/IUser';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class RegistrationService {

    constructor(private _httpClient: HttpClient) {

    }
    private _registrationApiUrl = "";

    getUser(): Observable<IUser> {
        return this._httpClient.get<IUser>(this._registrationApiUrl)
            .do(data => console.log(JSON.stringify(data)))
            ._catch(this.handleError);
    }
    register(user: IRegistrationInterface): void {
        //this._httpClient.post(_this._registrationApiUrl,{},{ headers: })
        console.log(user.email);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }

}
