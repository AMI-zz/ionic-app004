import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { System01Page } from '../systems/system01';

import { System02Page } from '../systems/system02';
import { System03Page } from '../systems/system03';
import { System04Page } from '../systems/system04';




@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  

  constructor(
  public navCtrl: NavController) {
      
  }





  goToSystem01() {
    // go to the system page
    // and pass in the session data

    this.navCtrl.push(System01Page, {id:123,name: "Carl"});
  }

  goToSystem02() {
    // go to the system page
    // and pass in the session data

    this.navCtrl.push(System02Page, {id:123,name: "Carl"});
  }

  goToSystem03() {
    // go to the system page
    // and pass in the session data

    this.navCtrl.push(System03Page, {id:123,name: "Carl"});
  }

  goToSystem04() {
    // go to the system page
    // and pass in the session data

    this.navCtrl.push(System04Page, {id:123,name: "Carl"});
  }
  
}
