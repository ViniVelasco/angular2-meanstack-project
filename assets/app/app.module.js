import { MessageModule } from './messages/message.module';
import { ErrorComponent } from './errors/error.component';
import { AuthService } from './auth/auth.service';
import { routing } from './app.routing';
import { HeaderComponent } from './header.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { HttpModule } from '@angular/http';
import { ErrorService } from './errors/error.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AppComponent,
                        AuthenticationComponent,
                        HeaderComponent,
                        ErrorComponent
                    ],
                    imports: [
                        BrowserModule,
                        routing,
                        HttpModule,
                        MessageModule
                    ],
                    providers: [AuthService, ErrorService],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
export { AppModule };
