import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { AlertDialogData } from "./alert-dialog-data.model";

@Component({
    selector: "app-alert-dialog",
    templateUrl: "./alert-dialog.component.html",
    styleUrls: ["./alert-dialog.component.css"]
})
export class AlertDialogComponent implements OnInit {
    title: string;   
    text: string

    constructor(private dialogRef: MatDialogRef<AlertDialogComponent>, 
                @Inject(MAT_DIALOG_DATA) private data: AlertDialogData) { }

    ngOnInit(){
        this.title = this.data.title;     
        this.text = this.data.text;
    }

    onNoClick() : void {
        this.dialogRef.close(false);
    }

    close(){
        this.dialogRef.close();
    }
}