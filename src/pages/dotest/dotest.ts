import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { TestService } from "../../service/testService";


/**
 * Generated class for the DotestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dotest',
  templateUrl: 'dotest.html',
})
export class DotestPage implements OnInit {

  @ViewChild('mySlider') slider: Slides;
  question:any
  choice:any
  temp:any
  choiceType:any
  currentQuiz:any
  choiceRadio:any
  indexSliders:any =0
  ansRadio:any

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage,
    private testService:TestService) {
  }
  ngOnInit(){
    this.slider.lockSwipeToPrev(true)
    this.slider.lockSwipeToNext(true)
    this.storage.get('user').then(val =>{
      console.log(this.navParams.get('dataID'));
      this.testService.testService(this.navParams.get('dataID'),val[0].user_id).subscribe(data =>{  
        console.log(data);

          this.choiceRadio =[]          
       this.question = data.question.qs_title             
       if (data.choice.length != 0) {
         this.choice = data.choice
       }
       this.choiceType = data.question.ques_type
       this.temp = data.temp_all
        this.currentQuiz = data.currentQuiz
         this.choice.forEach((element,index) => {           
           this.choiceRadio.push(data.choice[index].test_c_ans)     
         });

      })
     })
  }

  prev(){

  }

  // next(){
  //   this.storage.get('user').then(val =>{
  //   if (this.choiceType == 2) {
  //     if (this.ansRadio != undefined || this.ansRadio != null) {
  //       this.testService.testService(this.navParams.get('dataID'),val[0].user_id,"next",this.currentQuiz.number).subscribe(data =>{  
  //         this.slider.lockSwipeToPrev(false)
  //         this.slider.lockSwipeToNext(false) 
  //         this.slider.slideTo(this.indexSliders,500);
  //         this.slider.lockSwipeToPrev(true)
  //         this.slider.lockSwipeToNext(true)
  //         this.choiceRadio =[]
  //      this.question = data.question.ques_title
  //      if (data.choice.length != 0) {
  //        this.choice = data.choice
  //        this.choice.forEach((element,index) => {
  //          this.choiceRadio.push(data.choice[index].test_c_ans)
  //        });
  //      }        
  //       this.choiceType = data.question.ques_type
  //         this.temp = data.temp_all
  //         this.currentQuiz = data.currentQuiz
  //         this.ansRadio = undefined
  //         let dataArray = data.currentQuiz.ans_id
  //         if (dataArray != null) {
  //           dataArray.forEach(element => {
  //               this.ansRadio = element                
  //             });
  //         } 
  //       })
  //     }
  //   }
  // });
  // }
  // sendAns(){

  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DotestPage');
  }

}
