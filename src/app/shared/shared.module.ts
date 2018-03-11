import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConfirmDialogComponent } from "./dialogs/confirmDialog/confirm-dialog.component";
import { AlertDialogComponent } from "./dialogs/alertDialog/alert-dialog.component";
import { CustomMaterialModule } from "./custom-material.module";

@NgModule({
    entryComponents: [
        ConfirmDialogComponent,
        AlertDialogComponent
    ],
    declarations: [
        ConfirmDialogComponent,
        AlertDialogComponent
    ],   
    imports: [
        CustomMaterialModule
    ],
    exports: [
        CommonModule,   
        CustomMaterialModule,     
        ConfirmDialogComponent,
        AlertDialogComponent
    ]
})
export class SharedModule {

}