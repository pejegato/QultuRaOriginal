import { DashboardPage } from './../dashboard/dashboard';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoadingController } from 'ionic-angular';
import { AvisosProvider } from '../../providers/avisos/avisos';
/**
 * Generated class for the InicioSesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio-sesion',
  templateUrl: 'inicio-sesion.html',
})
export class InicioSesionPage {
  user = { email: '', password: '' };
  dashboardPage: any  = DashboardPage;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public auth: AuthProvider,
    public alertCtrl: AlertController,
    public loadingController: LoadingController,
    private avisosProvider : AvisosProvider 
  ) {
  }

  login() {    
    let loading = this.avisosProvider.crearLoading();
    
    loading.present();

    this.auth.loginUser(this.user.email, this.user.password)    
    .then((user) => { 
      loading.dismiss();  
    })
    .catch(err => {      
      loading.dismiss();
      this.avisosProvider.crearAlertaSimple("Error",err);      
    })
  }


  
}
