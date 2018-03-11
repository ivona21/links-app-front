import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../auth/auth.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["header.component.css"]
})
export class HeaderComponent {
    title: string = "Links app";  
    
    constructor(private router: Router,
                private authService: AuthService) { }

    isAuth(){
        return this.authService.isAuthenticated();
    }

    logout(){
        localStorage.removeItem("token");          
        this.router.navigate(["login"]);
    }
}