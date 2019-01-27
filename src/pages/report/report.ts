import { Component ,ViewChild ,Renderer} from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  @ViewChild("pie") pie :any
  @ViewChild("leftside") leftside :any
  @ViewChild("rightside") rightside :any
  @ViewChild("shadow") shadow:any
  data: Array<{title:any,image:any}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public renderer: Renderer) {
    this.data = [
      {
        title : "ยังไม่เรียน",
        image : "iconred.png"
        
      },
      {
        title : "กำลังเรียน",
        image : "iconorange.png"
      },
      {
        title : "เรียนแล้ว",
        image : "icongreen.png"
      }
    ]
  }

  ionViewDidLoad() {
    this.updateDonutChart(50,true)
    console.log('ionViewDidLoad ReportPage');
  }

  updateDonutChart(percent, donut) {
    percent = Math.round(percent);
    if (percent > 100) {
        percent = 100;
    } else if (percent < 0) {
        percent = 0;
    }
    var deg = Math.round(360 * (percent / 100));


    if(percent > 50){
      this.renderer.setElementStyle(this.pie.nativeElement,'clip', 'rect(auto, auto, auto, auto)');
      this.renderer.setElementStyle(this.rightside.nativeElement,'transform', 'rotate(180deg)');
    }else{
      this.renderer.setElementStyle(this.pie.nativeElement,'clip', 'rect(0, 1em, 1em, 0.5em)');
      this.renderer.setElementStyle(this.rightside.nativeElement,'transform', 'rotate(0deg)');
    }
    if (donut) {
      this.renderer.setElementStyle(this.rightside.nativeElement,'border-width', '0.1em');
      this.renderer.setElementStyle(this.leftside.nativeElement,'border-width', '0.1em');
      this.renderer.setElementStyle(this.shadow.nativeElement,'border-width', '0.1em');
    }else{
      this.renderer.setElementStyle(this.rightside.nativeElement,'border-width', '0.5em');
      this.renderer.setElementStyle(this.leftside.nativeElement,'border-width', '0.5em');
      this.renderer.setElementStyle(this.shadow.nativeElement,'border-width', '0.5em');
    }
    this.renderer.setElementStyle(this.leftside.nativeElement,'transform', 'rotate(' + deg + 'deg)');

}

}
