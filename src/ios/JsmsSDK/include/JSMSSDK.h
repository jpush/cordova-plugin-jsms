//
//  JSMSSDK.h
//
//
//  Created by jpush on 16/3/28.
//  Copyright © 2016年 HXHG. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "JSMSConstant.h"

/*!
 * @abstract 异步回调 block
 *
 * @discussion 获取验证码和验证验证码结果都会通过这个block返回
 *
 * - 如果调用出错，则error不为空，可根据 error.code 来获取错误码。该错误码 JSMS 相关文档里有详细的定义 http://docs.jiguang.cn/guideline/iOS_SMS_SDK/。
 * - 如果返回正常，则error为空。具体查看相关接口说明。
 *
 */
typedef void (^JSMSCompletionHandler)(id _Nullable resultObject,  NSError *_Nullable error);

@interface JSMSSDK : NSObject

/**
 *  初始化SDK
 *
 *  @param appkey appkey 
 */
+ (void)registerWithAppKey:(NSString * _Nonnull)appKey;

/**
 *  获取短信验证码 （最小间隔时间内只能调用一次）
 *
 *  @param number     手机号码
 *  @param templateID 短信模板ID
 *  @param handler    服务器返回状态，成功时 error 为空 resultObject 为 @"success"
 */
+ (void)getVerificationCodeWithPhoneNumber:(NSString * _Nonnull)number
                             andTemplateID:(NSString * _Nonnull)templateID
                         completionHandler:(JSMSCompletionHandler _Nonnull)handler;

/**
 *  获取语音验证码 （v1.2.0 新增接口）
 *
 *  @param number     手机号码
 *  @param handler    服务器返回状态，成功时 error 为空 resultObject 为 @"success"
 *  @discussion       默认中文播报。设置其它播报语言请调用getVoiceVerificationCodeWithPhoneNumber:languageOptions:completionHandler:方法
 */
+ (void)getVoiceVerificationCodeWithPhoneNumber:(NSString * _Nonnull)number
                              completionHandler:(JSMSCompletionHandler _Nonnull)handler;


/**
 *  获取语音验证码 （v1.4.0 新增接口）
 *
 *  @param number     手机号码
 *  @param number     播报语言。参数无效时，默认中文播报
 *  @param handler    服务器返回状态，成功时 error 为空 resultObject 为 @"success"
 */
+ (void)getVoiceVerificationCodeWithPhoneNumber:(NSString * _Nonnull)number
                                languageOptions:(JSMSLanguageOptions)options
                              completionHandler:(JSMSCompletionHandler _Nonnull)handler;

/**
 *  验证验证码
 *
 *  @param number  手机号码
 *  @param vCode   (短信/语音)验证码
 *  @param handler  服务器返回状态，，成功时 error 为空 resultObject 为 @"success"
 */
+ (void)commitWithPhoneNumber:(NSString * _Nonnull)number
             verificationCode:(NSString * _Nonnull)vCode
            completionHandler:(JSMSCompletionHandler _Nonnull)handler;

/**
 *  设置获取验证码的时间间隔 （有效间隔 0~3600s）
 *  在设置间隔时间内只能发送一次获取验证码的请求，SDK 默认是30s
 *  @param seconds  时间间隔
 */
+ (void)setMinimumTimeInterval:(NSTimeInterval)seconds;





@end
