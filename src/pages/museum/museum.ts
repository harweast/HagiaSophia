import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UnitsPage } from '../units/units';

@Component({
  selector: 'page-museum',
  templateUrl: 'museum.html'
})
export class MuseumPage {

  constructor(public navCtrl: NavController) {

  }

  goToUnits() {
    this.navCtrl.push(UnitsPage);
  }
}
