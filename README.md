# cordova-plugin-jsms

[![release](https://img.shields.io/badge/release-1.2.0-blue.svg)](https://github.com/jpush/cordova-plugin-jsms/releases)
[![platforms](https://img.shields.io/badge/platforms-iOS%7CAndroid-lightgrey.svg)](https://github.com/jpush/cordova-plugin-jsms)
[![weibo](https://img.shields.io/badge/weibo-JPush-blue.svg)](http://weibo.com/jpush?refer_flag=1001030101_&is_all=1)

极光官方支持的 Cordova 短信验证码插件，支持 Android 和 iOS 平台。

> 目前不提供免费使用，有意可联系官方[商务客服](https://www.jiguang.cn/sms)。

注意：从 v1.2.0 开始支持 cordova-android v7.0.0+ 和 ionic-native。因 cordova-android 从 v7.0.0 开始修改了项目结构，因此不兼容旧版本，升级时请注意。

## Install

```shell
cordova plugin add cordova-plugin-jsms --variable APP_KEY=Your_App_KEY
```

或

```shell
cordova plugin add https://github.com/jpush/cordova-plugin-jsms.git --variable APP_KEY=Your_App_Key
```

或下载到本地：

```shell
cordova plugin add <Plugin path> --variable APP_KEY=Your_App_Key
```

> [这里](http://docs.jiguang.cn/guideline/statistical_report/)了解如何获得 AppKey。

如果使用了 ionic，可以通过 npm 安装 @jiguang-ionic/jsms 适配 ionic-native。

```shell
npm install --save @jiguang-ionic/jsms
```

然后在 *app.module.ts* 中增加：

```js
import { JSMS } from '@jiguang-ionic/jsms';
...
  providers: [
    ...
    JSMS,
    ...
  ]
```

具体可参考 ./ionic/example 中的文件。

## API

[API 文档](/doc/API.md)

## Support

- [官网文档](http://docs.jiguang.cn/guideline/JSMS_guide/)
- [极光社区](http://community.jiguang.cn/)

## Contribute

Please contribute! [Look at the issues](https://github.com/jpush/cordova-plugin-jsms/issues).

## License

MIT © [JiGuang](/LICENSE)
