import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { UnitsPage } from '../units/units';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'page-museum',
  templateUrl: 'museum.html'
})
export class MuseumPage {

  museumInfo: any;
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    private appService: AppService,
    private elRef: ElementRef) {
    this.museumInfo = appService.getMuseumInfo(); 
  }

  goToUnits() {
    this.navCtrl.push(UnitsPage);
  }
  showOtherPrices() {
    let alert = this.alertCtrl.create({
      title: 'Diğer Ücretler!',
      subTitle: 'Öğrenci : 20TL \n 0-6 Yaş : Ücretsiz',
      buttons: ['OK']
    });
    alert.present();
  }
}
