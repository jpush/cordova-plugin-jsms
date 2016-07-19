//
//
//  Created by 57380422@qq.com on 2016.07.18.
//
//

#import <Cordova/CDV.h>

#define kJPushPluginReceiveNotification @"JPushPluginReceiveNofication"

@interface JSMSPlugin : CDVPlugin{

}

+(void)registerAppkey;
-(void)getSmsCode:(CDVInvokedUrlCommand*)command;
-(void)checkSmsCode:(CDVInvokedUrlCommand*)command;

@end
