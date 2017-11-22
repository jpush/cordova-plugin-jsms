//
//  JSMSConstant.h
//  JSms-test
//
//  Created by jpush on 16/3/28.
//  Copyright © 2016年 HXHG. All rights reserved.
//

#define JSMS_VERSION_NUMBER 1.4.0

#ifndef JSMSConstant_h
#define JSMSConstant_h


typedef NS_ENUM(int, JSMSAuthCodeRequestError) {
    //获取验证码uuid错误，验证码验证失败
    JSMSAuthCodeRequestGetUuidError = 2993,
    //参数为空
    JSMSAuthCodeRequestParameterError = 2994,
    //两次请求不超过最小时间间隔
    JSMSAuthCodeRequestFrequentError = 2996,
    //号码改变，请首先获取验证码
    JSMSAuthCodePhoneNumberChangedError = 2997,
    //其他错误
    JSMSAuthCodeRequestOtherError = 2999,
    //手机号不合法
    JSMSAuthCodeRequestInvalidMobile = 4204,
    //body为空
    JSMSAuthCodeRequestEmptyBody = 4001,
    //无效的appKey
    JSMSAuthCodeRequestInvalidAppkey = 4002,
    //无效的来源
    JSMSAuthCodeRequestInvalidPlatform = 4003,
    //body解密失败
    JSMSAuthCodeRequestDecryptAesBodyFailed = 4004,
    //aes key解密失败
    JSMSAuthCodeRequestDecryptAesKeyFailed = 4005,
    //时间戳转化失败
    JSMSAuthCodeRequestTimestampConvertFailed = 4006,
    //body格式不正确
    JSMSAuthCodeRequestBadFormatterBody = 4007,
    //无效的时间戳
    JSMSAuthCodeRequestInvalidTimestamp = 4008,
    //没有短信验证权限
    JSMSAuthCodeRequestNoSmscodeAuth = 4009,
    //请求超频
    JSMSAuthCodeRequestOutOfFreg = 4011,
    //api不存在
    JSMSAuthCodeRequestApiNotFound = 4012,
    //模板不存在
    JSMSAuthCodeRequestTempNotFound = 4013,
    //空的extra
    JSMSAuthCodeRequestEmptyExtra = 4014,
    //验证码错误
    JSMSAuthCodeRequestWrongCode = 4015,
    //余额不足
    JSMSAuthCodeRequestNoMoney = 4016,
    //过期验证码
    JSMSAuthCodeRequestExpiredCode = 4017,
    //已经验证过
    JSMSAuthCodeRequestAlreadyVerified = 4018,
    //服务器错误
    JSMSAuthCodeRequestSeverInternalError = 5000,
    
};


typedef NS_OPTIONS(NSUInteger, JSMSLanguageOptions) {
    JSMSLanguage_zh_Hans          =  1 << 0,          //中文
    JSMSLanguage_en               =  1 << 1      //英文
};


#endif /* JSMSConstant_h */

