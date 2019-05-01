import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: BarcodeScannerOptions;

  constructor(private barcode: BarcodeScanner, public navCtrl: NavController) {

  }

  async scanBarcode(){
    const results = await this.barcode.scan();
    console.log(results);

      if(results.text == "000001"){
        var j = document.getElementById("jul").innerHTML;
        var jj = parseInt(j) + 1;
        document.getElementById("jul").innerHTML = jj.toString();
      }

      else if(results.text == "000002"){
        var n = document.getElementById("nicolas").innerHTML;
        var nn = parseInt(n) + 1;
        document.getElementById("nicolas").innerHTML = nn.toString();
      }

      else if(results.text == "000003"){
        var i = document.getElementById("issam").innerHTML;
        var ii = parseInt(i) + 1;
        document.getElementById("issam").innerHTML = ii.toString();
      }

      else if(results.text == "000004"){
        var c = document.getElementById("clara").innerHTML;
        var cc = parseInt(c) + 1;
        document.getElementById("clara").innerHTML = cc.toString();
      }

      else if(results.text == "000005"){
        var f = document.getElementById("jana").innerHTML;
        var ff = parseInt(f) + 1;
        document.getElementById("jana").innerHTML = ff.toString();
      }

      else if(results.text == "000006"){
        var a = document.getElementById("jad").innerHTML;
        var aa = parseInt(a) + 1;
        document.getElementById("jad").innerHTML = aa.toString();
      }

      else{
        alert("No Binner Found");
      }
  }

}
