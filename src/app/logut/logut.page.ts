import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { InteractionService } from '../servicio/interaction.service';

@Component({
  selector: 'app-logut',
  templateUrl: './logut.page.html',
  styleUrls: ['./logut.page.scss'],
})
export class LogutPage implements OnInit {

  constructor(public interaction:InteractionService,
              private router: Router,
              private auth:Auth) { }

  ngOnInit() {
  }
        cerrar(){
          this.interaction.showLoading('Cerrando Seccion')
          this.auth.signOut();
          this.interaction.closeLoading()
          this.interaction.presentToast('Seccion Cerrada')
          this.router.navigate(['/login'])
        }

        volver(){
          this.router.navigate(['/home'])
        }
}
