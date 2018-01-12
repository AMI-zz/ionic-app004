

import { Component } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';

//import { NavController,AlertController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

// import { AboutPage } from '../about/about';

import { System02Page } from '../systems/system02';



@Component({
  selector: 'page-system01',
  templateUrl: 'system01.html'
})



export class System01Page {
  
  conferenceDate = '2018-02-14';

  loginForm: FormGroup;
    username: any;
  constructor(public alertCtrl: AlertController,public navCtrl: NavController,public formBuilder: FormBuilder){
    this.loginForm = formBuilder.group({
    username: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])]
    })
    this.username = this.loginForm.controls['username'];
    
  }


  login(value) {
    if (value.username == "手机号码") {
      this.navCtrl.push(System02Page,{id:"123412341234234",tittle:"second"});
    } else {
      console.log("登录失败");
    }

  }










  changeVersion(){
  
  }


  doConfirm() {
        let confirm = this.alertCtrl.create({
            title: '标题标题',
            message: '这是标题的内容',
            buttons: [{
                text: '取消',
                handler: () => {
                    console.log('取消');
                }
            }, {
                text: '确定',
                handler: () => {
                    console.log('A确定');
                }
            }]        });
        confirm.present();
    }
 

}
