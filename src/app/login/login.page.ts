import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../servicio/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { InteractionService } from '../servicio/interaction.service';
import {Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;

  credenciales ={
    email:'',
    password:'',
  }
  
  constructor(private auth: AuthService,
              public interaction:InteractionService,
              private router: Router) { }
  ngOnInit(): void {
    
  }

  async login() {
      this.interaction.showLoading('Ingresando...')
      console.log('credenciales ->', this.credenciales);
      const res = await this.auth.login(this.credenciales).catch(error =>{});
      console.log('error');
      this.interaction.closeLoading();
      this.interaction.presentToast('Email o Password invalida');
      if(res){
        console.log('res------>', res);
        this.interaction.closeLoading();
        this.interaction.presentToast('Ingresado con exito')
        this.router.navigate(['/home'])
        } 
  }

}
  
     

    

