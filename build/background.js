'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const lib_1 = require("vue-cli-plugin-electron-builder/lib");
const electron_devtools_installer_1 = __importStar(require("electron-devtools-installer"));
const isDevelopment = process.env.NODE_ENV !== 'production';
let win;
// Scheme must be registered before the app is ready
electron_1.protocol.registerSchemesAsPrivileged([
    { scheme: 'app', privileges: { secure: true, standard: true } }
]);
function createWindow() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create the browser window.
        const win = new electron_1.BrowserWindow({
            width: 1200,
            height: 1000,
            webPreferences: {
                // Use pluginOptions.nodeIntegration, leave this alone
                // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
                contextIsolation: false,
                nodeIntegration: true
            }
        });
        if (process.env.WEBPACK_DEV_SERVER_URL) {
            // Load the url of the dev server if in development mode
            yield win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
            if (!process.env.IS_TEST)
                win.webContents.openDevTools();
        }
        else {
            lib_1.createProtocol('app');
            // Load the index.html when not in development
            win.loadURL('app://./index.html');
        }
    });
}
// Quit when all windows are closed.
electron_1.app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (electron_1.BrowserWindow.getAllWindows().length === 0)
        createWindow();
});
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on('ready', () => __awaiter(void 0, void 0, void 0, function* () {
    if (isDevelopment && !process.env.IS_TEST) {
        // Install Vue Devtools
        try {
            yield electron_devtools_installer_1.default(electron_devtools_installer_1.VUEJS_DEVTOOLS);
        }
        catch (e) {
            console.error('Vue Devtools failed to install:', e.toString());
        }
    }
    createWindow();
    win.webContents.on('did-finish-load', () => {
        win.webContents.send('sendPath', electron_1.app.getPath('userData'));
    });
}));
if (isDevelopment) {
    if (process.platform === 'win32') {
        process.on('message', (data) => {
            if (data === 'graceful-exit') {
                electron_1.app.quit();
            }
        });
    }
    else {
        process.on('SIGTERM', () => {
            electron_1.app.quit();
        });
    }
}
//# sourceMappingURL=background.js.map