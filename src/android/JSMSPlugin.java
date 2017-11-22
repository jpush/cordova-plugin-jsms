package cn.jiguang.cordova.sms;

import android.text.TextUtils;
import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import cn.jpush.sms.SMSSDK;
import cn.jpush.sms.listener.SmscheckListener;
import cn.jpush.sms.listener.SmscodeListener;

public class JSMSPlugin extends CordovaPlugin {
    private static final String TAG = "JSMSPlugin";

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
    }

    @Override
    public boolean execute(final String action, final JSONArray data,
                           final CallbackContext callbackContext) throws JSONException {
        cordova.getThreadPool().execute(new Runnable() {
            @Override
            public void run() {
                try {
                    Method method = JSMSPlugin.class.getDeclaredMethod(action,
                            JSONArray.class, CallbackContext.class);
                    method.invoke(JSMSPlugin.this, data, callbackContext);
                } catch (Exception e) {
                    Log.e(TAG, e.toString());
                }
            }
        });
        return true;
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

    void getVoiceCode(JSONArray data, final CallbackContext callback) {
        try {
            String phoneNum = data.getString(0);

            if (TextUtils.isEmpty(phoneNum)) {
                callback.error("Phone number is empty");
                return;
            }

            SMSSDK.getInstance().getVoiceCodeAsyn(phoneNum, new SmscodeListener() {
                @Override
                public void getCodeSuccess(String uuid) {
                    callback.success(uuid);
                }

                @Override
                public void getCodeFail(int errCode, String errMsg) {
                    Log.i(TAG, errCode + ": " + errMsg);
                    callback.error(errCode);
                }
            });
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error(e.getMessage());
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

    void setIntervalTime(JSONArray data, CallbackContext callback) {
        try {
            long intervalTime = data.getLong(0);
            SMSSDK.getInstance().setIntervalTime(intervalTime);
            callback.success();
        } catch (JSONException e) {
            e.printStackTrace();
            callback.error(e.getMessage());
        }
    }

    void getIntervalTime(JSONArray data, CallbackContext callback) {
        long internalTime = SMSSDK.getInstance().getIntervalTime();
        callback.success(internalTime + "");
    }

}
