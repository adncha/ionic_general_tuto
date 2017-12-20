import {Component} from '@angular/core';
import {IonicPage, Modal, NavController, NavParams, ModalController, ModalOptions} from 'ionic-angular';

/**
 * Generated class for the ModalHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-home',
  templateUrl: 'modal-home.html',
})
export class ModalHomePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modal: ModalController) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ModalHomePage');
  }

  openModal() {

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    const myModalData = {
      name: 'Adnan Chaabi',
      occupation: 'Developer'
    }
    const myModal: Modal = this.modal.create('ModalPage', {data: myModalData}, myModalOptions);
    myModal.present();

    myModal.onDidDismiss(data => {
      console.log('I have dismissed');
      console.log(data);
    });

    myModal.onWillDismiss(data => {
      console.log('I am about to dismiss');
      console.log(data);
    });
  }


}
