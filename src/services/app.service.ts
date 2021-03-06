import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';

declare var $: any;

@Injectable()
export class AppService {

  constructor(private http: Http) {
  }
 
  getMuseumInfo() {
    var museumInfo = {
      Id: 1,
      Alias: "HAGIA_SOPHIA",
      Title: "Hagia Sophia",
      Description: "Ayasofya (Yunanca: Aγία Σοφία, tam adı: Ναός τῆς Ἁγίας τοῦ Θεοῦ Σοφίας, Latince: Sancta Sophia ya da Sancta Sapientia), İstanbul'da tarihî bir müze. Bizans İmparatoru I. Jüstinyen tarafından, 532-537 yılları arasında İstanbul'un tarihi yarımadasındaki eski şehir merkezine inşa ettirilmiş bazilika planlı bir patrik katedrali olup, 1453 yılında İstanbul'un Osmanlılar tarafından alınmasından sonra, Fatih Sultan Mehmet tarafından camiye dönüştürülmüştür. 1935 yılından beri ise müze olarak hizmet vermektedir.[2] Ayasofya, mimari bakımdan, bazilika planı ile merkezî planı birleştiren, kubbeli bazilika tipinde bir yapı olup kubbe geçişi ve taşıyıcı sistem özellikleriyle mimarlık tarihinde önemli bir dönüm noktası olarak ele alınır.",
      Location: "Sultanahmet Fatih/İSTANBUL",
      OpenHours: "09:00 - 18:00",
      Fees: [
        {
          Category: "Adult",
          Amount: 20.0,
          Currency: "EUR"
        },
        {
          Category: "Student",
          Amount: 10.0,
          Currency: "EUR"
        }
      ],
      PhoneNumber: "+90 (212) 522 17 50", 
      Price: "40 TL",
      Guide: {
        Images: [
          "http://ayasofyamuzesi.gov.tr/sites/default/files/1_2_0.png",
          "http://i.cdn.ensonhaber.com/resimler/diger/132_435.jpg",
          "http://gezipgordum.com/wp-content/uploads/Ayasofya-M%C3%BCzesi-%C4%B0%C3%A7i.jpg?x36515"
        ],
        Audio: "www.audio.com"
      }
    };
 
    return museumInfo;
  }

  getUnits() {
    var unitArray = [];
    unitArray.push({
      id: 1,
      unitName: "Ayasofya'nın Kubbesi",
      unitFloor: "Kat 1",
      imageUrl: "http://ayasofyamuzesi.gov.tr/sites/default/files/styles/large/public/Kubbe_0.JPG?itok=kQDKDFf_"
    });
    unitArray.push({
      id: 2,
      unitName: "Mihrap",
      unitFloor: "Kat 1",
      imageUrl: "http://ayasofyamuzesi.gov.tr/sites/default/files/styles/large/public/Mihrab.JPG?itok=oY4y4Lkg"
    });
    unitArray.push({
      id: 3,
      unitName: "Hünkâr Mahfili",
      unitFloor: "Kat 2",
      imageUrl: "http://ayasofyamuzesi.gov.tr/sites/default/files/hunkar.jpg"
    });
    unitArray.push({
      id: 4,
      unitName: "Maksureler",
      unitFloor: "Kat 2",
      imageUrl: "http://ayasofyamuzesi.gov.tr/sites/default/files/styles/large/public/maksureler.jpg?itok=VmtH0ulL"
    });

    return unitArray;
  }
}
