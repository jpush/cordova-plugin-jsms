var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var JSMS = (function (_super) {
    __extends(JSMS, _super);
    function JSMS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSMS.prototype.init = function () { return; };
    ;
    JSMS.prototype.setDebugMode = function (enable) { return; };
    /**
     * 请求短信验证码。
     * @param phoneNumber 要接收短信验证码的手机号码。
     * @param tempId 短信模板 id。
     */
    JSMS.prototype.getSmsCode = function (phoneNumber, tempId) { return; };
    /**
     * 请求语音验证码。
     * @param phoneNumber 要接收语音验证码的手机号码。
     * @param {number} languageCode:（可选）语言选项。0: 中文；1: 英文；2: 中英混合（中英混合仅支持 Android）。如果不填默认为中文。
     */
    JSMS.prototype.getVoiceCode = function (phoneNumber, languageCode) { return; };
    /**
     * 验证验证码。
     * @param phoneNumber 接收验证码的手机号码。
     * @param code 待验证的验证码。
     */
    JSMS.prototype.checkSmsCode = function (phoneNumber, code) { return; };
    /**
     * 设置前后两次获取验证码的时间间隔，默认 30 秒。
     * @param intervalTime 间隔时间，单位秒。
     */
    JSMS.prototype.setIntervalTime = function (intervalTime) { return; };
    /**
     * （Android only）获取设置的前后两次获取短信验证码的时间间隔。
     */
    JSMS.prototype.getIntervalTime = function () { return; };
    JSMS.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    JSMS.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], JSMS.prototype, "init", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], JSMS.prototype, "setDebugMode", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], JSMS.prototype, "getSmsCode", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number]),
        __metadata("design:returntype", Promise)
    ], JSMS.prototype, "getVoiceCode", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], JSMS.prototype, "checkSmsCode", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], JSMS.prototype, "setIntervalTime", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], JSMS.prototype, "getIntervalTime", null);
    JSMS = __decorate([
        Plugin({
            pluginName: 'JSMS',
            plugin: 'cordova-plugin-jsms',
            pluginRef: 'plugins.jsms',
            repo: 'https://github.com/jpush/cordova-plugin-jsms',
            install: 'ionic cordova plugin add cordova-plugin-jsms --variable APP_KEY=your_app_key',
            installVariables: ['APP_KEY'],
            platforms: ['Android', 'iOS']
        })
    ], JSMS);
    return JSMS;
}(IonicNativePlugin));
export { JSMS };
//# sourceMappingURL=index.js.map