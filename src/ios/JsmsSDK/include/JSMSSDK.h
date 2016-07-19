//
//  JSMSSDK.h
//  JSms-test
//
//  Created by GKC on 16/3/28.
//  Copyright © 2016年 HXHG. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "JSMSConstant.h"

@interface JSMSSDK : NSObject

/**
 *  初始化SDK
 *
 *  @param appkey appkey 
 */
+ (void)registerWithAppKey:(NSString * __nullable)appKey;

/**
 *  手机号码注册 （一分钟内只能调用一次）
 *
 *  @param number     手机号码
 *  @param templateID 短信模板ID
 *  @param handler    服务器返回状态，成功时 error 为空 resultObject 为 @"success"
 *
 */
+ (void)getVerificationCodeWithPhoneNumber:(NSString * __nullable)number
                  andTemplateID:(NSString * __nullable)templateID
              completionHandler:(JSMSCompletionHandler __nullable)handler;

/**
 *  上传验证码
 *
 *  @param number  手机号码
 *  @param vCode   短信验证码
 *  @param handler  服务器返回状态，，成功时 error 为空 resultObject 为 @"success"
 */
+ (void)commitWithPhoneNumber:(NSString * __nullable)number
             verificationCode:(NSString * __nullable)vCode
                   completionHandler:(JSMSCompletionHandler __nullable)handler;

@end
