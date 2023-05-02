import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-santiago',
  templateUrl: './santiago.page.html',
  styleUrls: ['./santiago.page.scss'],
})
export class SantiagoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  condes(){
    this.router.navigate(['/home/easy/santiago/lascondes'])
  }

  bernardo(){
    this.router.navigate(['/home/easy/santiago/bernardo'])
  }
  chicureo(){
    this.router.navigate(['/home/easy/santiago/chicureo'])
  }
  cerrillo(){
    this.router.navigate(['/home/easy/santiago/cerrillo'])
  }
  costanera(){
    this.router.navigate(['/home/easy/santiago/costanera'])
  }
  dehesa(){
    this.router.navigate(['/home/easy/santiago/dehesa'])
  }
  florida(){
    this.router.navigate(['/home/easy/santiago/florida'])
  }
  llano(){
    this.router.navigate(['/home/easy/santiago/llano'])
  }
  maipu(){
    this.router.navigate(['/home/easy/santiago/maipu'])
  }
  ochagavia(){
    this.router.navigate(['/home/easy/santiago/ochagavia'])
  }
  quilicura(){
    this.router.navigate(['/home/easy/santiago/quilicura'])
  }
  quilin(){
    this.router.navigate(['/home/easy/santiago/quilin'])
  }
  nunoa(){
    this.router.navigate(['/home/easy/santiago/p-nunoa'])
  }
  reina(){
    this.router.navigate(['/home/easy/santiago/reina'])
  }
  amalia(){
    this.router.navigate(['/home/easy/santiago/s-amalia'])
  }
  
}
