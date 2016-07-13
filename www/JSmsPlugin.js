var exec = require('cordova/exec')

var JSmsPlugin = function () {}

// 请求获取短信验证码。
// successCallback：成功回调。
// errorCallback：失败回调，以参数形式返回错误信息。
// phoneNum：字符串，表示要接收短信验证码的手机号。
// tempId：字符串，表示短信模板 ID。
JSmsPlugin.prototype.getSmsCode = function (successCallback, errorCallback, phoneNum, tempId) {
  exec(successCallback, errorCallback, 'JSmsPlugin', 'getSmsCode', [phoneNum, tempId, time])
}

// 检查短信验证码是否正确。
// successCallback：成功回调。
// errorCallback：失败回调，以参数形式返回错误信息。
// phoneNum：字符串，表示要接收短信验证码的手机号。
// code：字符串，表示用户输入的验证码。
JSmsPlugin.prototype.checkSmsCode = function (successCallback, errorCallback, phoneNum, code) {
  exec(successCallback, errorCallback, 'JSmsPlugin', 'checkSmsCode', [phoneNum, code])
}

JSmsPlugin.prototype.setDebugMode = function (successCallback, errorCallback, enabled) {
  exec(successCallback, errorCallback, 'JSmsPlugin', 'setDebugMode', [enabled]);
}

if (!window.plugins) {
  window.plugins = {}
}

if (!window.plugins.jsmsPlugin) {
  window.plugins.jsmsPlugin = new JSmsPlugin()
}

module.exports = new JSmsPlugin()
