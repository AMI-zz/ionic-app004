import { Component } from '@angular/core';


import { AlertController } from 'ionic-angular';




@Component({
  selector: 'page-system03',
  templateUrl: 'system03.html'
})
export class System03Page {
  
  conferenceDate = '2018-02-14';

  constructor(
  public alertCtrl: AlertController
  ){}


  




  
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
