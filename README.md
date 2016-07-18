# cordova-plugin-jsms

[![QQ Group](https://img.shields.io/badge/QQ%20Group-413602425-red.svg)]()
[![release](https://img.shields.io/badge/release-1.0.0-blue.svg)](https://github.com/jpush/cordova-plugin-jsms/releases)
[![platforms](https://img.shields.io/badge/platforms-iOS%7CAndroid-lightgrey.svg)](https://github.com/jpush/cordova-plugin-jsms)
[![weibo](https://img.shields.io/badge/weibo-JPush-blue.svg)](http://weibo.com/jpush?refer_flag=1001030101_&is_all=1)

[English doc](/doc/README_en.md).

极光官方支持的 Cordova 短信验证码插件，支持 Android、iOS 平台。

> 目前不提供免费使用，有意可联系官方[商务客服](https://www.jiguang.cn/sms)。

## 安装
- 在线

        cordova plugin add cordova-plugin-jsms --variable APP_KEY=Your_App_KEY

  或

      cordova plugin add https://github.com/jpush/cordova-plugin-jsms.git --variable APP_KEY=Your_App_Key

- 本地

        cordova plugin add <Plugin path> --variable APP_KEY=Your_App_Key

    > [这里](http://docs.jiguang.cn/guideline/statistical_report/)了解如何获得 AppKey。

## API
### init
初始化 JSMS 功能，主要是检测一些配置信息，如果配置错误将初始化失败，打印错误日志，调用其他接口前必须先初始化。

#### 接口定义

    window.jsms.init()

#### 代码示例

    window.jsms.init()

### setDebugMode
是否开启 JSMS Debug 模式。

#### 接口定义

    window.jsms.setDebugMode(successCallback, errorCallback, enabled)

#### 参数说明
- successCallback: 成功回调。
- errorCallback: 失败回调，以参数形式返回错误信息。
- enabled：true / false。

#### 代码示例

    window.jsms.setDebugMode(function () {
      // Success callback.
    }, function (errorMsg) {
      // Error callback.
      console.log(errorMsg)
    }, true)

### getSmsCode
请求短信验证码。

#### 接口定义

    window.jsms.getSmsCode(successCallback, errorCallback, phoneNum, tempId)

#### 参数说明
- successCallback: 成功回调，以参数形式返回 uuid。
- errorCallback: 失败回调，以参数形式返回错误码。
- phoneNum: 字符串，要接收短信验证码的手机号。
- tempId: 字符串，短信模板 ID。

#### 代码示例

    window.jsms.getSmsCode(function () {
      // Success callback.
    }, function (errorCode) {
      // Error callback.
    }, '159xxxxxxxx', '1')

### checkSmsCode
验证用户输入的短信验证码。

#### 接口定义

    window.jsms.checkSmsCode(successCallback, errorCallback, phoneNum, code)

#### 参数说明
- successCallback：成功回调，以参数形式返回验证码信息。
- errorCallback：错误回调，以参数形式返回错误码。
- phoneNum：收到验证码的手机号码。
- code：用户输入的验证码。

#### 代码示例

    window.jsms.checkSmsCode(function (code) {
      // Success callback.
    }, function (errorCode) {
      // Error callback.
    }, '159xxxxxxxx', '51234')

## Todo

- [x] Android 端开发
- [ ] iOS 端开发

## 更多
- QQ 群: 413602425
- [官网文档](http://docs.jiguang.cn/guideline/JSMS_guide/)
- [极光社区](http://community.jiguang.cn/)
