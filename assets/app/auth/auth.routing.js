import { SigninComponent } from './signin.component';
import { RouterModule } from "@angular/router";
import { SignupComponent } from "./signup.component";
import { LogoutComponent } from './logout.component';
export var AUTH_ROUTES = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
];
export var authRouting = RouterModule.forChild(AUTH_ROUTES);
