import { Component } from '@angular/core';


import { AlertController, NavController, NavParams } from 'ionic-angular';

import { TabDiscoverPage } from '../tab-discover-page/tab-discover-page';




@Component({
  selector: 'page-system02',
  templateUrl: 'system02.html'
})
export class System02Page {
  
  conferenceDate = '2018-02-14';

  Id: string;
  Tittle: string;

  constructor(public alertCtrl: AlertController,
              public navCtrl:NavController,
              public NavParams:NavParams
  ){
    this.Id = NavParams.get('id');
    this.Tittle = NavParams.get('tittle');
  }


    blurInput(){ console.log("blur"); }
    focusInput(){ console.log("focus"); }

    changeVersion(){
    
    }


    TabDiscoverPage() {
    // go to the system page
    // and pass in the session data

    this.navCtrl.push(TabDiscoverPage, {id:123,name: "Carl"});
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
