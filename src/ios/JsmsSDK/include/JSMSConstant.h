//
//  JSMSConstant.h
//  JSms-test
//
//  Created by GKC on 16/3/28.
//  Copyright © 2016年 HXHG. All rights reserved.
//

#define JSMS_VERSION_NUMBER 1.1.0

#ifndef JSMSConstant_h
#define JSMSConstant_h


/*!
 * @abstract 异步回调 block
 *
 * @discussion 大多数异步 API 都会以过个 block 回调。
 *
 * - 如果调用出错，则 error 不为空，可根据 error.code 来获取错误码。该错误码 JMessage 相关文档里有详细的定义。
 * - 如果返回正常，则 error 为空。从 resultObject 去获取相应的返回。每个 API 的定义上都会有进一步的定义。
 *
 */
typedef void (^JSMSCompletionHandler)(id resultObject, NSError *error);


typedef NS_ENUM(int, JSMSAuthCodeRequestError) {
    //获取验证码uuid错误，验证码验证失败
    JSMSAuthCodeRequestGetUuidError = 2993,
    //两次请求不超过一分钟
    JSMSAuthCodeRequestFrequentError = 2996,
    //请首先获取验证码
    JSMSAuthCodeRequestNOSmsUuidError = 2997,
    //网络错误
    JSMSAuthCodeRequestConnectionError = 2998,
    //其他错误
    JSMSAuthCodeRequestOtherError = 2999,
    //请求超时
    JSMSAuthCodeRequestTimeOut = 3001,
    //手机号不合法
    JSMSAuthCodeRequestInvalidatedPhoneNumber = 3002,
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

static NSString *const KEY_APP_KEY = @"appkey";


#endif /* JSMSConstant_h */

