var exec = require('cordova/exec')

var JSMSPlugin = function () {}
JSMSPlugin.prototype.init = function () {
  exec(null, null, 'JSMSPlugin', 'init', [])
}

JSMSPlugin.prototype.setDebugMode = function (successCallback, errorCallback, enabled) {
  exec(successCallback, errorCallback, 'JSMSPlugin', 'setDebugMode', [enabled])
}

// 请求获取短信验证码。
// successCallback：成功回调。
// errorCallback：失败回调，以参数形式返回错误码。
// phoneNum：字符串，表示要接收短信验证码的手机号。
// tempId：字符串，表示短信模板 ID。
JSMSPlugin.prototype.getSmsCode = function (successCallback, errorCallback, phoneNum, tempId) {
  exec(successCallback, errorCallback, 'JSMSPlugin', 'getSmsCode', [phoneNum, tempId])
}

// 检查短信验证码是否正确。
// successCallback：成功回调。
// errorCallback：失败回调，以参数形式返回错误码。
// phoneNum：字符串，表示要接收短信验证码的手机号。
// code：字符串，表示用户输入的验证码。
JSMSPlugin.prototype.checkSmsCode = function (successCallback, errorCallback, phoneNum, code) {
  exec(successCallback, errorCallback, 'JSMSPlugin', 'checkSmsCode', [phoneNum, code])
}

if (!window.plugins) {
  window.plugins = {}
}

if (!window.plugins.jsmsPlugin) {
  window.plugins.jsmsPlugin = new JSMSPlugin()
}

module.exports = new JSMSPlugin()
