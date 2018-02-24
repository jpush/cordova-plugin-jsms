var exec = require('cordova/exec')

var PLUGIN_NAME = 'JSMSPlugin'

var JSMSPlugin = function () {}

JSMSPlugin.prototype.init = function () {
  if (device.platform === 'iOS') {
    exec(null, null, PLUGIN_NAME, 'setup', [])
  } else if (device.platform === 'Android') {
    exec(null, null, PLUGIN_NAME, 'init', [])
  }
}

/**
 * 开启 Debug 模式（Android only）。
 */
JSMSPlugin.prototype.setDebugMode = function (enable, successCallback, errorCallback) {
  if (device.platform === 'Android') {
    exec(successCallback, errorCallback, PLUGIN_NAME, 'setDebugMode', [enable])
  }
}

/** 
* 请求获取短信验证码。
* @param {String} phoneNum：表示要接收短信验证码的手机号。
* @param {String} tempId：表示短信模板 ID。
*/
JSMSPlugin.prototype.getSmsCode = function (phoneNum, tempId, successCallback, errorCallback) {
  exec(successCallback, errorCallback, PLUGIN_NAME, 'getSmsCode', [phoneNum, tempId])
}

/**
 * 获取语音验证码。
 * @param {String} phoneNum: 待接受语音验证码的手机号码。
 * @param {number} languageCode:（可选）语言选项。0: 中文；1: 英文；2: 中英混合。如果不填默认为中文。
 */ 
JSMSPlugin.prototype.getVoiceCode = function (phoneNum, languageCode, successCallback, errorCallback) {
  exec(successCallback, errorCallback, PLUGIN_NAME, 'getVoiceCode', [phoneNum, languageCode])
}

/**
 * 检查验证码是否正确。
 * @param {String} phoneNum：表示要接收验证码的手机号。
 * @param {String} code：表示用户输入的验证码。
 */
JSMSPlugin.prototype.checkSmsCode = function (phoneNum, code, successCallback, errorCallback) {
  exec(successCallback, errorCallback, PLUGIN_NAME, 'checkSmsCode', [phoneNum, code])
}

/**
 * 设置前后两次获取验证码的时间间隔（单位秒），默认 30 秒。
 * @param {number} 前后两次获取验证码的时间间隔（单位秒）。
 */
JSMSPlugin.prototype.setIntervalTime = function (intervalTime, successCallback, errorCallback) {
  exec(successCallback, errorCallback, PLUGIN_NAME, 'setIntervalTime', [intervalTime])
}

/**
 * (Android only)获取当前设置的时间间隔（单位秒）。
 * 
 * @param {function} successCallback = function (internalTime: number) {} 以参数形式返回间隔时间。
 */
JSMSPlugin.prototype.getIntervalTime = function (successCallback, errorCallback) {
  if (device.platform === 'Android') {
    exec(successCallback, errorCallback, PLUGIN_NAME, 'getIntervalTime', [])
  }
}

if (!window.plugins) {
  window.plugins = {}
}

if (!window.plugins.jsms) {
  window.plugins.jsms = new JSMSPlugin()
}

module.exports = new JSMSPlugin()
