"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler = (err) => {
    console.error(err.message);
    console.error((err.stack));
};
exports.default = ErrorHandler;
//# sourceMappingURL=Error.js.map