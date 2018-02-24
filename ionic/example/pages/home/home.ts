import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { JSMS } from '@jiguang-ionic/jsms'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private timer = 30;
  private intervalId: number;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private jsms: JSMS) {

  }

  /**
   * 获取短信验证码。
   */
  getSmsCode(phoneNum: string) {
    if (!phoneNum) {
      this.alertCtrl.create({
        subTitle: '手机号不能为空',
        buttons: ['OK']
      }).present();
      return;
    }

    this.jsms.getSmsCode(phoneNum, '1') // 这里设置短信内容模板为 '1'。
      .then(() => {
        this.alertCtrl.create({
          subTitle: '短信验证码已发送',
          buttons: ['OK']
        }).present();

        this.intervalId = setInterval(() => {
          this.timer--;
          if (this.timer == 0) {
            clearInterval(this.intervalId);
            this.timer = 30;
          }
        }, 1000);
      }).catch(err => {
        alert(err.code + ': ' + err.description);
      });
  }

  getVoiceCode(phoneNum: string) {
    if (!phoneNum) {
      this.alertCtrl.create({
        subTitle: '手机号不能为空',
        buttons: ['OK']
      }).present();
      return;
    }

    this.jsms.getVoiceCode(phoneNum, 0)
      .then(() => {
        this.alertCtrl.create({
          subTitle: '语音验证码已发送',
          buttons: ['OK']
        }).present();

        this.intervalId = setInterval(() => {
          this.timer--;
          if (this.timer == 0) {
            clearInterval(this.intervalId);
            this.timer = 30;
          }
        }, 1000);
      }).catch(err => {
        alert(err.code + ': ' + err.description);
      });
  }

  checkCode(phoneNum: string, code: string) {
    if (!phoneNum) { // 这里只做简单的校验。
      this.alertCtrl.create({
        subTitle: '手机号不能为空',
        buttons: ['OK']
      }).present();
      return;
    }

    if (!code) {
      this.alertCtrl.create({
        subTitle: '验证码不能为空',
        buttons: ['OK']
      }).present();
      return;
    }

    this.jsms.checkSmsCode(phoneNum, code)
      .then(() => {
        this.alertCtrl.create({
          subTitle: '正确',
          buttons: ['OK']
        }).present();

        clearInterval(this.intervalId);
        this.timer = 30;  // 将倒计时重新置为 30s。
      }).catch(err => {
        alert(err.code + ': ' + err.description);
      });
  }

}
