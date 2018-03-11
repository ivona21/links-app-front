import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from "./auth/auth.service";
import { AuthGuardService } from "./auth/auth-guard.service";
import { LinksComponent } from "./links/links.component";

import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { AuthModule } from './auth/auth.module';
import { LinksService } from "./links/links.service";



@NgModule({
  declarations: [
    AppComponent,
    LinksComponent
  ],
  imports: [   
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,   
    CoreModule,
    AuthModule  
  ],
  providers: [LinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }