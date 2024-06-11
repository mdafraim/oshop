import { Injectable } from "@angular/core";


@Injectable({
    providedIn: "root"
})

export class AuthService {
    constructor(){}

    isLoggedIn(): boolean {
        let token = localStorage.getItem('token')
        return token ? true : false;
    }
}