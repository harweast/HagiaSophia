import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';

declare var $: any;

@Injectable()
export class AppService {

  constructor()  {
  }
 
  getMuseumInfo(){
    var museumInfo = {
      images:[
        { source: "http://ayasofyamuzesi.gov.tr/sites/default/files/1_2_0.png" },
        { source: "http://i.cdn.ensonhaber.com/resimler/diger/132_435.jpg" },
        { source: "http://gezipgordum.com/wp-content/uploads/Ayasofya-M%C3%BCzesi-%C4%B0%C3%A7i.jpg?x36515" },
      ],
      openTimes: "09:00 - 18:00",
      location: "İstanbul, Türkiye.",
      description: "Ayasofya (Yunanca: Aγία Σοφία, tam adı: Ναός τῆς Ἁγίας τοῦ Θεοῦ Σοφίας, Latince: Sancta Sophia ya da Sancta Sapientia), İstanbul'da tarihî bir müze. Bizans İmparatoru I. Jüstinyen tarafından, 532-537 yılları arasında İstanbul'un tarihi yarımadasındaki eski şehir merkezine inşa ettirilmiş bazilika planlı bir patrik katedrali olup, 1453 yılında İstanbul'un Osmanlılar tarafından alınmasından sonra, Fatih Sultan Mehmet tarafından camiye dönüştürülmüştür. 1935 yılından beri ise müze olarak hizmet vermektedir.[2] Ayasofya, mimari bakımdan, bazilika planı ile merkezî planı birleştiren, kubbeli bazilika tipinde bir yapı olup kubbe geçişi ve taşıyıcı sistem özellikleriyle mimarlık tarihinde önemli bir dönüm noktası olarak ele alınır."
    };
    return museumInfo;
  }
}
