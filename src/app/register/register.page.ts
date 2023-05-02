import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { usuarios } from '../modelo';
import { AuthService } from '../servicio/auth.service';
import { BasedatosService } from '../servicio/basedatos.service';
import { InteractionService } from '../servicio/interaction.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

      datos: usuarios = {
        nombre: '',
        email: '',
        password: '',
        uid: '',
        perfil:'visitante'
        
      }


  constructor(private auth: AuthService,
              private Firestore : BasedatosService,
              public interaction:InteractionService,
              private router:Router) { }

  ngOnInit() {
  }

  async registrar(){
    this.interaction.showLoading('Registrando...')
    const res= await this.auth.register(this.datos).catch(error => {
      this.interaction.presentToast('Estos estos datos ya esta registrado')
      console.log('error');
    })
    if(res){
      console.log('usuario creado');
      const path = 'Usuarios'
      const id = res.user.uid;
      this.datos.uid = id;
      await this.Firestore.createDocument(this.datos, path, id)
      this.interaction.closeLoading();
      this.interaction.presentToast('Registrado con exito')
      this.router.navigate(['/home'])
    }


  }

}
