import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  [x: string]: any;

  loading:any;

  constructor(  private toastController: ToastController,
                public loadingCtrl: LoadingController) { }



                async presentToast(mensaje:string) {
                  const toast = await this.toastController.create({
                    message: mensaje,
                    duration: 1500,
                    icon: 'globe'
                  });
              
                  await toast.present();
                }


                async showLoading(mensaje:string) {
                   this.loading = await this.loadingCtrl.create({
                    message: mensaje,
                    duration: 3000,
                    spinner: 'circles',
                  });
              
                  this.loading.present();
                }



                async closeLoading() {
                      await this.loading.dismiss();
                
                }


}

