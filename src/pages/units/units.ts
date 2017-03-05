import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UnitPage } from '../unit/unit';

@Component({
  selector: 'page-units',
  templateUrl: 'units.html'
})
export class UnitsPage {

  constructor(public navCtrl: NavController) {

  }

  goToUnitDetail(){
    this.navCtrl.push(UnitPage, { id: 1});
  }

}
