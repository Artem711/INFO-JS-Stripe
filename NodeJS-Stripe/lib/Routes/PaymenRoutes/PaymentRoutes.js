"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = express_1.default();
const WebRoutes_1 = __importDefault(require("./WebRoutes/WebRoutes"));
exports.app.use(WebRoutes_1.default);
//# sourceMappingURL=PaymentRoutes.js.map