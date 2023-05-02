import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Item } from 'src/app/modelo';
import { BasedatosService } from '../servicio/basedatos.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  productos: Item = {
    nombre: '',
    precio: null,
    stock: null, 
    descripcion: '',
    id:'',

  }

  loading: any;

  
  constructor(public database: BasedatosService,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController) { }

  ngOnInit() {this.ver_producto()}


      async save(){
        this.presentLoading();
        console.log('esto vamos a guardar -->' , this.productos);
        const data = this.productos;
        data.id = this.database.creatId();
        const enlace = 'items';
        await this.database.createDocument<Item>(data, enlace, data.id);
        this.presentToast('Guardado con Exito', 2000);
        
        this.productos = {
          nombre: '',
          precio: null,
          stock: null, 
          descripcion: '',
          id:'',
        };
        this.loading.dismiss();
      }


      async presentToast(mensaje: string, tiempo: number) {
          const toast = await this.toastCtrl.create({
            message: mensaje,  
            duration: tiempo,
          })
          toast.present();
        
      }

      async presentLoading() {
        this.loading = await this.loadingCtrl.create({
          message: 'Guardando',
        });
        await this.loading.present();
      } 

        ver_producto(){
          this.database.getCollection('Items').subscribe(res=>(
            console.log('esta es la nueva respuesta', res)
          ))
        }
} 
 