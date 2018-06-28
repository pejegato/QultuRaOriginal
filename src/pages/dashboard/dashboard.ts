import {UserProvider} from "./../../providers/user/user";
import {Component} from "@angular/core";
import {IonicPage, MenuController, ModalController} from "ionic-angular";
import {Dashcard} from "../../interfaces/dashcard-interface";
import {DASHCARDS} from "../../data/dashcards.data";
import {ScannerProvider} from "../../providers/scanner/scanner";
import { StartPage } from "../start/start";
import { ModalObraPage } from "../modal-obra/modal-obra";

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})

export class DashboardPage {

  listaContactos:Dashcard[] = [];
  
  constructor(
    private menuController: MenuController,
    public sc: ScannerProvider,
    public userProvider: UserProvider,
    public modalCtrl: ModalController

  ) {
    this.listaContactos = DASHCARDS.slice(0);
  }

  abrirMenu(){
    this.menuController.toggle();
  }

  abrirScanner(){
    console.log("xxxx");
    this.sc.scanCode().then(()=>{
       const modal = this.modalCtrl.create(ModalObraPage);
        modal.present();    
    }).catch(err =>{

    })
    
  }
}
