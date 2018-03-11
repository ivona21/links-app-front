import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth.service";
import { User } from "../user.model";
import { AlertDialogComponent } from "../../shared/dialogs/alertDialog/alert-dialog.component";
import { AlertDialogData } from "../../shared/dialogs/alertDialog/alert-dialog-data.model";
import { MatDialog } from "@angular/material";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private alert: MatDialog,
        private authService: AuthService) { }
    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.registerForm = new FormGroup({
            "firstname": new FormControl(null, Validators.required),
            "lastname": new FormControl(null, Validators.required),
            "email": new FormControl(null, [Validators.required, Validators.email]),
            "username": new FormControl(null, Validators.required),
            "password": new FormControl(null, Validators.required)
        });
    }

    onSubmit() {
        let userToRegister: User = new User(0,
            this.registerForm.value.username,
            this.registerForm.value.email,
            this.registerForm.value.password,
            this.registerForm.value.firstname,
            this.registerForm.value.lastname);

        this.authService.register(userToRegister).subscribe(
            (response) => {
                this.alert.open(AlertDialogComponent, {
                    width: "300px",
                    data: new AlertDialogData("You successfully registered", "")
                })
                this.router.navigate(["login"]);
            }, (error) => {
                this.alert.open(AlertDialogComponent, {
                    width: "300px",
                    data: new AlertDialogData(error.error, "")
                });
            });
    }
}