import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { AppRouterModule } from "../app-routing.module";
import { AuthService } from "../auth/auth.service";
import { AuthGuardService } from "../auth/auth-guard.service";
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent        
    ],
    imports: [
        SharedModule,
        AppRouterModule
    ],
    exports: [
        HeaderComponent,
        AppRouterModule,
        SharedModule
    ],
    providers: [AuthService, AuthGuardService, JwtHelperService]
})
export class CoreModule {

}