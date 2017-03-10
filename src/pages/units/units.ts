import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UnitPage } from '../unit/unit';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'page-units',
  templateUrl: 'units.html'
})
export class UnitsPage {

  units: any;

  constructor(public navCtrl: NavController, private appService: AppService) {
    this.units = appService.getUnits();
  }

  goToUnitDetail(unitId) {
    this.navCtrl.push(UnitPage, { id: unitId });
  }

}
