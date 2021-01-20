"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_router_1 = require("vue-router");
const Body_vue_1 = __importDefault(require("../views/Body.vue"));
const routes = [
    {
        path: '/',
        name: 'Body',
        component: Body_vue_1.default
    },
];
const router = vue_router_1.createRouter({
    history: process.env.IS_ELECTRON ? vue_router_1.createWebHashHistory() : vue_router_1.createWebHistory(),
    routes
});
exports.default = router;
//# sourceMappingURL=index.js.map