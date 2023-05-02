import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-santiago',
  templateUrl: './santiago.page.html',
  styleUrls: ['./santiago.page.scss'],
})
export class SantiagoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  estacion(){
    this.router.navigate(['/home/sodimac/santiago/sodimac-estacion'])
  }
  lascondes(){
    this.router.navigate(['/home/sodimac/santiago/sodimac-las-condes'])
  }
  elbosque(){
    this.router.navigate(['/home/sodimac/santiago/sodimac-el-bosque'])
  }
  
  macul(){
    this.router.navigate(['/home/sodimac/santiago/sodimac-macul'])
  }
  maipu(){
    this.router.navigate(['/home/sodimac/santiago/sodimac-maipu'])
  }
  snuble(){
    this.router.navigate(['/home/sodimac/santiago/sodimac-nuble'])
  }
  losdominico(){
    this.router.navigate(['/home/sodimac/santiago/sodimac-los-dominicos'])
  }
  plazaoeste(){
    this.router.navigate(['/home/sodimac/santiago/sodimac-plaza-oeste'])
  }
  plazavespucio(){
    this.router.navigate(['/home/sodimac/santiago/sodimac-plaza-vespucio'])
  }
  plazanorte(){
    this.router.navigate(['/home/sodimac/santiago/sodimac-plaza-norte'])
  }
  quilin(){
    this.router.navigate(['/home/sodimac/santiago/sodimac-quilin'])
  }
  quilicura(){
    this.router.navigate(['/home/sodimac/santiago/sodimac-quilicura'])
  }
  kennedy(){
    this.router.navigate(['/home/sodimac/santiago/sodimac-kennedy'])
  }
  sanmiguel(){
    this.router.navigate(['/home/sodimac/santiago/sodimac-san-miguel'])
  }
  lareina(){
    this.router.navigate(['/home/sodimac/santiago/sodimac-la-reina'])
  }
  independencia(){
    this.router.navigate(['/home/sodimac/santiago/sodimac-independencia'])
  }
  puentealto(){
    this.router.navigate(['/home/sodimac/santiago/sodimac-puente-alto'])
  }
  tobalaba(){
    this.router.navigate(['/home/sodimac/santiago/sodimac-tobalaba'])
  }
}
