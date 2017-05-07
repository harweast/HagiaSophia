import { Component, Input } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
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
  audio: any;
  currentValue: any = 0;
  max: any = 1;
  isPlaying: boolean = false;

  constructor(private navParams: NavParams,
    public alertCtrl: AlertController) {
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

  ionViewDidLoad() {
    this.audio = new Audio();
    this.audio.src = "http://www.noiseaddicts.com/samples_1w72b820/4279.mp3";
    this.audio.load();
    var viewModel = this;
    this.audio.ontimeupdate = function () {
      if (this.currentTime == 0) {
        viewModel.max = 1;
        viewModel.currentValue = 0;
      }
      else {
        viewModel.currentValue = this.currentTime / this.duration;
      }
    };
  }

  ionViewDidLeave() {
    if (this.isPlaying) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  play() {
    this.audio.play();
    this.isPlaying = true;
    // this.nativeAudio.play('myUnitAudio').then(this.onPlaySuccess, this.onPlayError);
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
    // this.nativeAudio.stop('myUnitAudio').then(this.onStopSuccess, this.onStopError);
  }
}
