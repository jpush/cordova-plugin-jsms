# API 文档

- [init](#init)
- [setDebugMode](#setdebugmodeenable-boolean-success-function-error-function)
- [getSmsCode](#getsmscodephonenumber-string-tempid-string-success-function-error-function)
- [getVoiceCode](#getvoicecodephonenumber-string-languagecode-number-success-function-error-function)
- [checkSmsCode](#checksmscodephonenumer-string-code-string-success-function-error-function)
- [setIntervalTime](#setintervaltimeintervaltime-number-success-function-error-function)
- [getIntervalTime](#getintervaltimesuccess-function)

## init()

初始化 JSMS SDK。

### 代码示例

```js
window.jsms.init();
```

## setDebugMode(enable: boolean, success: function, error: function)

（Android only）开启 debug 模式，将会打印 JSMS SDK 的相关日志。

### 参数说明

- enable:
  - true: 开启；
  - false: 关闭。
- success: 成功回调。
- error: 错误回调。该 API 中仅当传入参数类型错误时报错。

### 代码示例

```js
window.jsms.setDebugMode(true, () => {  // success
  // do something.
}, error => {
  let code = error.code
  let desc = error.description
});
```

## getSmsCode(phoneNumber: string, tempId: string, success: function, error: function)

获取短信验证码。

### 参数说明

- phoneNumber: 手机号码。目前仅支持国内号码。
- tempId: 短信模板 id。可通过极光控制台进行管理。
- success: 成功回调。
- error: 错误回调。

### 代码示例

```js
window.jsms.getSmsCode('18600001111', '1', () => {
  // do something.
}, error => {
  let code = error.code
  let desc = error.description
})
```

## getVoiceCode(phoneNumber: string, languageCode: number, success: function, error: function)

获取语音验证码。

### 参数说明

- phoneNumber: 手机号码。目前仅支持国内号码。
- languageCode: 指定语音验证码所用的语言。0：中文；1：英文。
- success: 成功回调。
- error: 错误回调。

### 代码示例

```js
window.jsms.getVoiceCode('18600001111', 0, () => {
  // do something.
}, error => {
  let code = error.code
  let desc = error.description
})
```

## checkSmsCode(phoneNumer: string, code: string, success: function: error: function)

校验验证码是否正确。

### 参数说明

- phoneNumber: 手机号码。目前仅支持国内号码。
- code: 待校验的验证码。
- success: 成功回调。
- error: 错误回调。

### 代码示例

```js
window.jsms.checkSmsCode('18600001111', '510002', () => {
	// 验证码正确。
}, error => {
	let code = error.code
  let desc = error.description
})
```

## setIntervalTime(intervalTime: number, success: function, error: function)

设置前后两次获取验证码的时间间隔，默认为 30 秒。

### 参数说明

- intervalTime: 间隔时间，单位秒。
- success: 成功回调。
- error: 错误回调。

### 代码示例

```js
window.jsms.setIntervalTime(60, () => {
  // success.
}, error => {
  let code = error.code
  let desc = error.description
})
```

## getIntervalTime(success: function)

（Android only）获得当前设置的获取验证码时间间隔。

### 参数说明

- success：成功回调。以参数形式返回时间间隔，单位秒。

### 代码示例

```js
window.jsms.getIntervalTime(intervalTime => {
  // do something.
})
```
