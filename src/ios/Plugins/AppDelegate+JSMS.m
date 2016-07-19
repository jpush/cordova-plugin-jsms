//
//
//  Created by 57380422@qq.com on 2016.07.18.
//
//

#import "AppDelegate+JSMS.h"
#import "JSMSPlugin.h"
#import <objc/runtime.h>

@implementation AppDelegate (JSMS)

+(void)load{

    Method origin;
    Method swizzle;

    origin=class_getInstanceMethod([self class],@selector(init));
    swizzle=class_getInstanceMethod([self class], @selector(init_plus));
    method_exchangeImplementations(origin, swizzle);
}

-(instancetype)init_plus{
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(applicationDidLaunch:) name:@"UIApplicationDidFinishLaunchingNotification" object:nil];
    return [self init_plus];
}

-(void)applicationDidLaunch:(NSNotification *)notification{
    if (notification) {
        [JSMSPlugin registerAppkey];
    }
}


@end
