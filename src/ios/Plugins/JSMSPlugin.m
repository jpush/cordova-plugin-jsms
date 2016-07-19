//
//
//  Created by 57380422@qq.com on 2016.07.18.
//
//


#import <UIKit/UIKit.h>
#import "JSMSPlugin.h"
#import "JSMSSDK.h"


#define WEAK_SELF(weakSelf)  __weak __typeof(&*self)weakSelf = self;

static NSString *const APP_KEY = @"APP_KEY";
static NSString *const JSMSConfigFileName = @"JSMSConfig";
static NSString *const KEY_ERRORCODE = @"errorCode";
static NSString *const KEY_ERRORDESCRIP = @"errorDscription";

@implementation JSMSPlugin


-(void)initial:(CDVInvokedUrlCommand*)command{
    //do nithng,because Cordova plugin use lazy load mode.
}

#ifdef __CORDOVA_4_0_0

- (void)pluginInitialize {
    NSLog(@"### pluginInitialize ");
}

#else

- (CDVPlugin*)initWithWebView:(UIWebView*)theWebView{
    NSLog(@"### initWithWebView ");
    if (self=[super initWithWebView:theWebView]) {
    }
    return self;
}

#endif

-(void)getSmsCode:(CDVInvokedUrlCommand*)command{
    NSString *phoneNumber = [command argumentAtIndex:0];
    NSString *templateId  = [command argumentAtIndex:1];
    WEAK_SELF(weakSelf);
    [JSMSSDK getVerificationCodeWithPhoneNumber:phoneNumber andTemplateID:templateId completionHandler:^(id resultObject, NSError *error) {
        [weakSelf handleResultWithValue:resultObject command:command error:error log:@"get sms code"];
    }];
}

-(void)checkSmsCode:(CDVInvokedUrlCommand*)command{
    NSString *phoneNumber = [command argumentAtIndex:0];
    NSString *code        = [command argumentAtIndex:1];
    WEAK_SELF(weakSelf);
    [JSMSSDK commitWithPhoneNumber:phoneNumber verificationCode:code completionHandler:^(id resultObject, NSError *error) {
        [weakSelf handleResultWithValue:resultObject command:command error:error log:@"verification code"];
    }];
}

#pragma mark- 内部方法
+(void)registerAppkey{

    NSString *path = [[NSBundle mainBundle] pathForResource:JSMSConfigFileName ofType:@"plist"];

    if (path == nil) {
        NSLog(@"error: JSMSConfig.plist not found");
        assert(0);
    }

    NSMutableDictionary *dict = [[NSMutableDictionary alloc] initWithContentsOfFile:path];
    NSString          *appkey = dict[APP_KEY];

    if (!appkey || appkey.length == 0) {
        NSLog(@"error: app key not found in JSMSConfig.plist ");
        assert(0);
    }

    [JSMSSDK registerWithAppKey:appkey];

}

-(void)handleResultWithValue:(id)value command:(CDVInvokedUrlCommand*)command error:(NSError*)error log:(NSString*)log{

    CDVPluginResult *result = nil;

    if (error == nil) {
        CDVCommandStatus status = CDVCommandStatus_OK;

        if ([value isKindOfClass:[NSString class]]) {
            value = [value stringByAddingPercentEscapesUsingEncoding:NSUTF8StringEncoding];
        } else if ([value isKindOfClass:[NSNull class]]) {
            value = nil;
        }

        if ([value isKindOfClass:[NSObject class]]) {
            result = [CDVPluginResult resultWithStatus:status messageAsString:value];
        } else {
            NSLog(@"JSMSPlugin Log: Cordova callback block returned unrecognized type: %@", NSStringFromClass([value class]));
            result = nil;
        }

        if (result != nil) {
            if (log) {
                NSLog(@"JSMSPlugin Log: %@ succeeded",log);
            }
        }else{
            if (log) {
                NSLog(@"JSMSPlugin Log: %@ failed",log);
            }
            result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
        }

    }else{
        if (log) {
            NSLog(@"JSMSPlugin Log: %@ failed",log);
        }
        NSMutableDictionary * dict = [NSMutableDictionary new];
        [dict setValue:[NSNumber numberWithLong:error.code] forKey:KEY_ERRORCODE];
        [dict setValue:error.debugDescription forKey:KEY_ERRORDESCRIP];
        result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsDictionary:dict];
    }

    WEAK_SELF(weakSelf);
    [weakSelf.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

@end
