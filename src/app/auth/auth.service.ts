import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from "./user.model";
import { TokenRequest } from "./tokenRequest.model";

@Injectable()
export class AuthService {
    url: string = "http://localhost:5000/api/auth/";
    token: string;   

    constructor(private http: HttpClient) { }

    isAuthenticated() {        
        const token = localStorage.getItem('token');
        return token ? true : false;
        //return !this.jwtHelper.isTokenExpired(token);
    }

    register(user: User) {      
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'             
            }),
            observe: "response"          
        }

        return this.http.post(this.url + "register", user, {
            headers: new HttpHeaders(
                { 'Content-Type': 'application/json' }),
            observe: "response"
        });
    }

    login(tokenRequest: TokenRequest) {
        return this.http.post(this.url + "login", tokenRequest, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            observe: "response"
        });

    }    
}