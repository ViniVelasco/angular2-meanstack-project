import { EventEmitter } from "@angular/core";
import { Error } from "./error.model";
var ErrorService = /** @class */ (function () {
    function ErrorService() {
        this.errorOcurred = new EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new Error(error.title, error.error.message);
        this.errorOcurred.emit(errorData);
    };
    return ErrorService;
}());
export { ErrorService };
