import { Component, ViewChild, Renderer } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LessonService } from "../../service/lessonService";
import { Storage } from "@ionic/storage";


@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  @ViewChild("pie") pie: any
  @ViewChild("leftside") leftside: any
  @ViewChild("rightside") rightside: any
  @ViewChild("shadow") shadow: any
  data: Array<{ title: any, image: any }>;

  googleChartLibrary;

  lessons: any;

  done: any;
  all: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public renderer: Renderer,
    private lessonData: LessonService, private storage: Storage) {
    this.storage.get("user").then(data => {
      if (data != null) {
        //this.userData = data;
        var userId = data[0].user_id;
        this.lessonData.lessonService(1, userId).subscribe(data => {
          this.lessons = data;
          console.log(data);

          var doneLesson = 0;
          var allLesson = 0
          for (let lesson of this.lessons) {
            //var ans = this.ansList.get(exercise.test_c_id);
            if (lesson.point) {
              doneLesson++;
            }
            allLesson++;
          }
          this.done = doneLesson;
          this.all = allLesson;

        });
      }
    });


  }

  ngOnInit() {
    this.useVanillaJSLibrary();
  }

  useVanillaJSLibrary() {
    this.googleChartLibrary = (<any>window).google;
    // Load the Visualization API and the corechart package.
    this.googleChartLibrary.charts.load('current', { 'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    this.googleChartLibrary.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  drawChart() {
    // Create the data table.
    var data = new this.googleChartLibrary.visualization.DataTable();
    data.addColumn('string', 'Activity Name');
    data.addColumn('number', 'Hours');
    data.addRows([
      ['เรียนแล้ว', this.done],
      ['ยังไม่ได้เรียน', this.all - this.done]
    ]);

    // Instantiate and draw our chart, passing in some options.
    var chart = new this.googleChartLibrary.visualization
      .PieChart(document.getElementById('pie-chart-div'));
      var options = {
        title: 'สรุปการเรียน',
        colors: ['green', 'red']
      }
    chart.draw(data, options);
  }


}
