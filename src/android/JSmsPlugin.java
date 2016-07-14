package cn.jiguang.jsms;

import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import cn.jpush.sms.SMSSDK;
import cn.jpush.sms.listener.SmscheckListener;
import cn.jpush.sms.listener.SmscodeListener;

public class JSmsPlugin extends CordovaPlugin {
    private static final String TAG = "JSmsPlugin";

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
    }

    @Override
    public boolean execute(final String action, final JSONArray args,
                           final CallbackContext callbackContext) throws JSONException {
        cordova.getThreadPool().execute(new Runnable() {
            @Override
            public void run() {
                try {
                    Method method = JSmsPlugin.class.getDeclaredMethod(action, JSONArray.class,
                            CallbackContext.class);
                    method.invoke(JSmsPlugin.this, args, callbackContext);
                } catch (NoSuchMethodException e) {
                    e.printStackTrace();
                    callbackContext.error("No such method.");
                } catch (InvocationTargetException e) {
                    e.printStackTrace();
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                }
            }
        });
        return super.execute(action, args, callbackContext);
    }

    void init(JSONArray data, CallbackContext callback) {
        SMSSDK.getInstance().initSdk(cordova.getActivity());
    }

    void setDebugMode(JSONArray data, CallbackContext callback) {
        try {
            boolean isDebug = data.getBoolean(0);
            SMSSDK.getInstance().setDebugMode(isDebug);
            callback.success();
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Arguments error.");
        }
    }

    void getSmsCode(JSONArray data, final CallbackContext callback) {
        try {
            String phoneNum = data.getString(0);
            String tempId = data.getString(1);

            SMSSDK.getInstance().getSmsCodeAsyn(phoneNum, tempId, new SmscodeListener() {
                @Override
                public void getCodeSuccess(String uuid) {
                    callback.success(uuid);
                }

                @Override
                public void getCodeFail(int errorCode, String desc) {
                    callback.error(errorCode);
                    Log.i(TAG, "Error: " + errorCode + " - " + desc);
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Arguments error.");
        }
    }

    void checkSmsCode(JSONArray data, final CallbackContext callback) {
        try {
            String phoneNum = data.getString(0);
            String code = data.getString(1);

            SMSSDK.getInstance().checkSmsCodeAsyn(phoneNum, code, new SmscheckListener() {
                @Override
                public void checkCodeSuccess(String code) {
                    callback.success(code); // code：验证码信息。
                }

                @Override
                public void checkCodeFail(int errorCode, String desc) {
                    callback.error(errorCode);
                    Log.i(TAG, "Error: " + errorCode + " - " + desc);
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error("Arguments error.");
        }
    }

}
