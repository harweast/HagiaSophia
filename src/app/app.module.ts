import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UnitPage } from '../pages/unit/unit';
import { UnitGalleryPage } from '../pages/unitGallery/unitGallery';
import { UnitsPage } from '../pages/units/units';
import { UnitTextPage } from '../pages/unitText/unitText';
import { MuseumPage } from '../pages/museum/museum';

@NgModule({
  declarations: [
    MyApp,
    UnitPage,
    UnitGalleryPage,
    HomePage,
    UnitsPage,
    UnitTextPage,
    MuseumPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UnitPage,
    UnitGalleryPage,
    HomePage,
    UnitsPage,
    UnitTextPage,
    MuseumPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
