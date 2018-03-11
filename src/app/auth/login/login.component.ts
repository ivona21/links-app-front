import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TokenRequest } from "../tokenRequest.model";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { AlertDialogComponent } from "../../shared/dialogs/alertDialog/alert-dialog.component";
import { AlertDialogData } from "../../shared/dialogs/alertDialog/alert-dialog-data.model";
import { MatDialog } from "@angular/material";

@Component({
    selector: "app-login-component",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup

    constructor(private router: Router,
                private alert: MatDialog,
                private authService: AuthService) { }
    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.loginForm = new FormGroup({
            "username": new FormControl(null, Validators.required),
            "password": new FormControl(null, Validators.required)
        })
    }

    onSubmit() {       
        let tokenRequest: TokenRequest = new TokenRequest(this.loginForm.value.username, this.loginForm.value.password);
        this.authService.login(tokenRequest).subscribe(
            (response) => {
                this.authService.token = response.body["token"];
                localStorage.setItem("token", response.body["token"]);
                this.router.navigate(["links"]);
            },
            (error) => {
                this.alert.open(AlertDialogComponent, {
                    width: "300px",
                    data: new AlertDialogData("Invalid credentials", "")
                });              
            }
        )
    }
}