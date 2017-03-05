import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { UnitGalleryPage } from '../unitGallery/unitGallery';
import { UnitTextPage } from '../unitText/unitText';

@Component({
  selector: 'page-unit',
  templateUrl: 'unit.html'
})
export class UnitPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tabRootGallery: any = UnitGalleryPage;
  tabRootDetail: any = UnitTextPage;
  isGalleryVisible: boolean = true;
  idParameter: any;
  infoToggle: string = "information-circle";

  constructor(private navParams: NavParams) {
    this.idParameter = navParams.get("id");
  }

  openDetail() {
    if (!this.isGalleryVisible) {
      this.infoToggle = "information-circle";
    }
    else {
      this.infoToggle = "images";

    }
    this.isGalleryVisible = !this.isGalleryVisible;

  }
}
