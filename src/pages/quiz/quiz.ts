import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  public username:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }

  quizContent(){
    let data = {
      username:this.username,
    };

    this.navCtrl.push('QuizContentPage',data);
  }

}
