import {Component} from '@angular/core';
import {IonicPage, ViewController, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, private view: ViewController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }



}
