import { MessageService } from './message.service';
import { FormsModule } from '@angular/forms';
import { MessageInputComponent } from './message-input.component';
import { MessageComponent } from './message.component';
import { MessageListComponent } from './message-list.component';
import { MessagesComponent } from './messages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MessagesComponent,
                        MessageListComponent,
                        MessageComponent,
                        MessageInputComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    providers: [
                        MessageService
                    ]
                },] },
    ];
    /** @nocollapse */
    MessageModule.ctorParameters = function () { return []; };
    return MessageModule;
}());
export { MessageModule };
