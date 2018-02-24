import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

@Plugin({
  pluginName: 'JSMS',
  plugin: 'cordova-plugin-jsms',
  pluginRef: 'plugins.jsms',
  repo: 'https://github.com/jpush/cordova-plugin-jsms',
  install: 'ionic cordova plugin add cordova-plugin-jsms --variable APP_KEY=your_app_key',
  installVariables: ['APP_KEY'],
  platforms: ['Android', 'iOS']
})
@Injectable()
export class JSMS extends IonicNativePlugin {

  @Cordova()
  init(): Promise<any> { return; };

  @Cordova()
  setDebugMode(enable: boolean): Promise<any> { return; }

  /**
   * 请求短信验证码。
   * @param phoneNumber 要接收短信验证码的手机号码。
   * @param tempId 短信模板 id。
   */
  @Cordova()
  getSmsCode(phoneNumber: string, tempId: string): Promise<any> { return; }

  /**
   * 请求语音验证码。
   * @param phoneNumber 要接收语音验证码的手机号码。
   * @param {number} languageCode:（可选）语言选项。0: 中文；1: 英文；2: 中英混合（中英混合仅支持 Android）。如果不填默认为中文。
   */
  @Cordova()
  getVoiceCode(phoneNumber: string, languageCode: number): Promise<any> { return; }

  /**
   * 验证验证码。
   * @param phoneNumber 接收验证码的手机号码。
   * @param code 待验证的验证码。 
   */
  @Cordova()
  checkSmsCode(phoneNumber: string, code: string): Promise<any> { return; }

  /**
   * 设置前后两次获取验证码的时间间隔，默认 30 秒。
   * @param intervalTime 间隔时间，单位秒。
   */
  @Cordova()
  setIntervalTime(intervalTime: number): Promise<any> { return; }

  /**
   * （Android only）获取设置的前后两次获取短信验证码的时间间隔。
   */
  @Cordova()
  getIntervalTime(): Promise<any> { return; }
}
