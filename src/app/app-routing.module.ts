import { NgModule } from "@angular/core";
import { RouterModule, Routes, CanActivate } from "@angular/router";
import { HomeComponent } from "./core/home/home.component";
import { LoginComponent } from "./auth/login/login.component";
import { LinksComponent } from "./links/links.component";
import { AuthGuardService } from "./auth/auth-guard.service";

const appRoutes: Routes = [
    { path: "links", component: LinksComponent, canActivate: [AuthGuardService] },
    { path: "", redirectTo: '/login', pathMatch: "full" },    
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRouterModule {

}