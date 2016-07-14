# API

- [初始化](#初始化)
	- [API - init](#api-init)
	- [接口定义](#接口定义)
	- [代码示例](#代码示例)
- [是否开启 Debug 模式](#是否开启-debug-模式)
	- [API - setDebugMode](#api-setdebugmode)
	- [接口定义](#接口定义)
	- [参数说明](#参数说明)
	- [代码示例](#代码示例)
- [请求短信验证码](#请求短信验证码)
	- [API - getSmsCode](#api-getsmscode)
	- [接口定义](#接口定义)
	- [参数说明](#参数说明)
	- [代码示例](#代码示例)
- [验证短信验证码](#验证短信验证码)
	- [API - checkSmsCode](#api-checksmscode)
	- [接口定义](#接口定义)
	- [参数说明](#参数说明)
	- [代码示例](#代码示例)

## 初始化
### API - init
初始化 JSMS 功能，主要是检测一些配置信息，如果配置错误将初始化失败，打印错误日志，调用其他接口前必须先初始化。

### 接口定义

    window.jsms.init()

### 代码示例

    window.jsms.init()

## 是否开启 Debug 模式
### API - setDebugMode
是否开启 JSMS Debug 模式。

### 接口定义

    window.jsms.setDebugMode(successCallback, errorCallback, enabled)

### 参数说明
- successCallback: 成功回调。
- errorCallback: 失败回调，以参数形式返回错误信息。
- enabled：true/false，是否开启。

### 代码示例

    window.jsms.setDebugMode(function () {
      // Success callback.
    }, function (errorMsg) {
      // Error callback.
      console.log(errorMsg)
    }, true)

## 请求短信验证码
### API - getSmsCode
请求短信验证码。

### 接口定义

    window.jsms.getSmsCode(successCallback, errorCallback, phoneNum, tempId)

### 参数说明
- successCallback: 成功回调，以参数形式返回 uuid。
- errorCallback: 失败回调，以参数形式返回错误码。
- phoneNum: 字符串，要接收短信验证码的手机号。
- tempId: 字符串，短信模板 ID。

### 代码示例

    window.jsms.getSmsCode(function () {
      // Success callback.
    }, function (errorCode) {
      // Error callback.
    }, '159xxxxxxxx', '1')

## 验证短信验证码
### API - checkSmsCode
验证用户输入的短信验证码。

### 接口定义

    window.jsms.checkSmsCode(successCallback, errorCallback, phoneNum, code)

### 参数说明
- successCallback：成功回调，以参数形式返回验证码信息。
- errorCallback：错误回调，以参数形式返回错误码。
- phoneNum：收到验证码的手机号码。
- code：用户输入的验证码。

### 代码示例

    window.jsms.checkSmsCode(function (code) {
      // Success callback.
    }, function (errorCode) {
      // Error callback.
    }, '159xxxxxxxx', '51234')
