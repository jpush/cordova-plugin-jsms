package cn.jiguang.cordova.sms;

import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.Method;

import cn.jpush.sms.SMSSDK;
import cn.jpush.sms.listener.SmscheckListener;
import cn.jpush.sms.listener.SmscodeListener;

public class JSMSPlugin extends CordovaPlugin {

    private static final String TAG = JSMSPlugin.class.getSimpleName();

    private final int ERR_CODE_PARAMETER = 1;   // 参数错误。
    private final String ERR_DESC_PARAMETER = "Parameters error";

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
        boolean isDebug;    // 默认不开启

        try {
            isDebug = data.getBoolean(0);
        } catch (JSONException e) {
            e.printStackTrace();
            handleResult(ERR_CODE_PARAMETER, ERR_DESC_PARAMETER, callback);
            return;
        }

        SMSSDK.getInstance().setDebugMode(isDebug);
        callback.success();
    }

    void getSmsCode(JSONArray data, final CallbackContext callback) {
        String phoneNum;
        String tempId;

        try {
            phoneNum = data.getString(0);
            tempId = data.getString(1);

        } catch (JSONException e) {
            e.printStackTrace();
            handleResult(ERR_CODE_PARAMETER, ERR_DESC_PARAMETER, callback);
            return;
        }

        SMSSDK.getInstance().getSmsCode(phoneNum, tempId, new SmscodeListener() {
            @Override
            public void getCodeSuccess(String uuid) {
                callback.success(uuid);
            }

            @Override
            public void getCodeFail(int errorCode, String desc) {
                handleResult(errorCode, desc, callback);
            }
        });
    }

    void getVoiceCode(JSONArray data, final CallbackContext callback) {
        String phoneNum;
        int language;

        try {
            phoneNum = data.getString(0);
            language = data.getInt(1);
        } catch (JSONException e) {
            e.printStackTrace();
            handleResult(ERR_CODE_PARAMETER, ERR_DESC_PARAMETER, callback);
            return;
        }

        SMSSDK.getInstance().getVoiceCode(phoneNum, language, new SmscodeListener() {
            @Override
            public void getCodeSuccess(String uuid) {
                callback.success(uuid); // uuid: 本次操作的唯一标识。
            }

            @Override
            public void getCodeFail(int errCode, String desc) {
                handleResult(errCode, desc, callback);
            }
        });
    }

    void checkSmsCode(JSONArray data, final CallbackContext callback) {
        String phoneNum;
        String code;

        try {
            phoneNum = data.getString(0);
            code = data.getString(1);
        } catch (JSONException e) {
            e.printStackTrace();
            handleResult(ERR_CODE_PARAMETER, ERR_DESC_PARAMETER, callback);
            return;
        }

        SMSSDK.getInstance().checkSmsCode(phoneNum, code, new SmscheckListener() {
            @Override
            public void checkCodeSuccess(String code) {
                callback.success(code); // code：验证码信息。
            }

            @Override
            public void checkCodeFail(int errorCode, String desc) {
                callback.error(errorCode);
                handleResult(errorCode, desc, callback);
            }
        });
    }

    void setIntervalTime(JSONArray data, CallbackContext callback) {
        long intervalTime;

        try {
            intervalTime = data.getLong(0);  // JS 传过来的单位是秒。
        } catch (JSONException e) {
            e.printStackTrace();
            handleResult(ERR_CODE_PARAMETER, ERR_DESC_PARAMETER, callback);
            return;
        }

        SMSSDK.getInstance().setIntervalTime(intervalTime * 1000);  // 秒转毫秒。
        callback.success();
    }

    void getIntervalTime(JSONArray data, CallbackContext callback) {
        long internalTime = SMSSDK.getInstance().getIntervalTime() / 1000;  // 毫秒转秒。
        callback.success((int) internalTime);
    }

    private void handleResult(int status, String desc, CallbackContext callback) {
        if (status == 0) {  // success
            callback.success();
        } else {    // error
            JSONObject errorJson = new JSONObject();
            try {
                errorJson.put("code", status);
                errorJson.put("description", desc);
            } catch (JSONException e) {
                e.printStackTrace();
            }
            callback.error(errorJson);
        }
    }
}
