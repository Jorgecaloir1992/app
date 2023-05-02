import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/modelo';
import { BasedatosService } from 'src/app/servicio/basedatos.service';
import { InteractionService } from 'src/app/servicio/interaction.service';

@Component({
  selector: 'app-costanera',
  templateUrl: './costanera.page.html',
  styleUrls: ['./costanera.page.scss'],
})
export class CostaneraPage implements OnInit {
  productos: Item = {
    nombre: '',
    precio: null,
    stock: null, 
    descripcion: '', 
    id:'', 
  }
  
  data: any[] = [];
  loading: any;
  
  constructor(private database: BasedatosService,
              private Interaction : InteractionService) { }
  
  ngOnInit() {
    this.getmostar();
  } 
  
    
  async save_easy_costanera(){
    this.Interaction.showLoading('Cargando...');
    console.log('esto vamos a guardar -->' , this.productos);
    const data = this.productos;
    data.id = this.database.creatId();
    const enlace = 'easy_costanera';
    await this.database.createDocument<Item>(data, enlace, 'costanera');
    this.Interaction.presentToast('Guardado con Exito');
    
    this.productos = {
      nombre: '',
      precio: null,
      stock: null, 
      descripcion: '',
      id:'',
    };
    this.loading.dismiss();
  }
  
  
  
  getmostar(){
  this.database.getCollection('easy_costanera').subscribe( res => {
    console.log('esta es la lectura', res);
    this.data = res;
   })
   
    }
  
  
  }