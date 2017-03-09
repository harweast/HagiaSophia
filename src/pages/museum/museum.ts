import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UnitsPage } from '../units/units';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'page-museum',
  templateUrl: 'museum.html'
})
export class MuseumPage {

  museumInfo: any;
  @ViewChild('museumDescription') museumDescription: any;

  constructor(public navCtrl: NavController, private appService: AppService, private elRef: ElementRef) {
    this.museumInfo = appService.getMuseumInfo();

  }

  ngAfterViewInit() {
    let divElement = this.museumDescription.nativeElement;
    var showChar = 500;
    var ellipsestext = "...";
    var moretext = "more";
    var lesstext = "less";
    var content = this.museumInfo.description;
    if (content.length > showChar) {
      var c = content.substr(0, showChar);
      var h = content.substr(showChar - 1, content.length - showChar);
      var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a class="morelink">' + moretext + '</a></span>';
      divElement.innerHTML = html;
      var found = this.elRef.nativeElement.querySelector('.morelink');
      var that = this;
      found.onclick = function (e) {
        console.log("clicked");
        var currrentElemet = e.currentTarget;
        if (currrentElemet.className.indexOf("less") == -1) {
          //$(this).removeClass("less");
          that.museumDescription.nativeElement.innerHtml = moretext;
        } else {
          //$(this).addClass("less");
          that.museumDescription.nativeElement.innerHtml = lesstext;
        }
        //$(this).parent().prev().toggle();
        //$(this).prev().toggle();
        return false;
      }
    }
  }

  goToUnits() {
    this.navCtrl.push(UnitsPage);
  }
}
