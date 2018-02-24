import { IonicNativePlugin } from '@ionic-native/core';
export declare class JSMS extends IonicNativePlugin {
    init(): Promise<any>;
    setDebugMode(enable: boolean): Promise<any>;
    /**
     * 请求短信验证码。
     * @param phoneNumber 要接收短信验证码的手机号码。
     * @param tempId 短信模板 id。
     */
    getSmsCode(phoneNumber: string, tempId: string): Promise<any>;
    /**
     * 请求语音验证码。
     * @param phoneNumber 要接收语音验证码的手机号码。
     * @param {number} languageCode:（可选）语言选项。0: 中文；1: 英文；2: 中英混合（中英混合仅支持 Android）。如果不填默认为中文。
     */
    getVoiceCode(phoneNumber: string, languageCode: number): Promise<any>;
    /**
     * 验证验证码。
     * @param phoneNumber 接收验证码的手机号码。
     * @param code 待验证的验证码。
     */
    checkSmsCode(phoneNumber: string, code: string): Promise<any>;
    /**
     * 设置前后两次获取验证码的时间间隔，默认 30 秒。
     * @param intervalTime 间隔时间，单位秒。
     */
    setIntervalTime(intervalTime: number): Promise<any>;
    /**
     * （Android only）获取设置的前后两次获取短信验证码的时间间隔。
     */
    getIntervalTime(): Promise<any>;
}
