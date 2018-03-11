import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,       
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,      
        MatDialogModule,       
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,       
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,       
        MatDialogModule,       
    ]
})
export class CustomMaterialModule {

}