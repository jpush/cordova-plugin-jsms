# cordova-plugin-jsms

This is the official plugin for [JSMS](https://www.jiguang.cn/sms) in Apache Cordova / PhoneGap (Android & iOS).

> Currently does not support free trial. If interested, please contact the [customer service business](https://www.jiguang.cn/sms).

## Installation
- Online

        cordova plugin add cordova-plugin-jsms --variable APP_KEY=Your_App_KEY

  or

      cordova plugin add https://github.com/jpush/cordova-plugin-jsms.git --variable APP_KEY=Your_App_Key

- Local

        cordova plugin add <Plugin path> --variable APP_KEY=Your_App_Key

    > [Click here](http://docs.jiguang.cn/guideline/statistical_report/) to learn how to get AppKey.

## API
### init
#### Definition

    window.jsms.init()

#### Example

    window.jsms.init()

### setDebugMode
#### Definition

    window.jsms.setDebugMode(successCallback, errorCallback, enabled)

#### Parameter
- successCallback: No return.
- errorCallback: Return error message by parameter.
- enabled: true / false.

#### Example

    window.jsms.setDebugMode(function () {
      // Success callback.
    }, function (errorMsg) {
      // Error callback.
      console.log(errorMsg)
    }, true)

### getSmsCode
#### Definition

    window.jsms.getSmsCode(successCallback, errorCallback, phoneNum, tempId)

#### Parameter
- successCallback: Return uuid by parameter.
- errorCallback: Return error code by parameter.
- phoneNum: String.
- tempId: String, SMS template ID.

#### Example

    window.jsms.getSmsCode(function () {
      // Success callback.
    }, function (errorCode) {
      // Error callback.
    }, '159xxxxxxxx', '1')

### checkSmsCode
#### Definition

    window.jsms.checkSmsCode(successCallback, errorCallback, phoneNum, code)

#### Parameter
- successCallback: Return Verification code info by parameter.
- errorCallback: Return error code by parameter.
- phoneNum: Telephone number.
- code: Verification code entered by the user.

#### Example

    window.jsms.checkSmsCode(function (code) {
      // Success callback.
    }, function (errorCode) {
      // Error callback.
    }, '159xxxxxxxx', '51234')

## More
- [Official Document](http://docs.jiguang.cn/guideline/JSMS_guide/).
- [Community Forum](http://community.jiguang.cn/).
