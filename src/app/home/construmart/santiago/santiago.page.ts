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

  lasrejas(){
    this.router.navigate(['/home/construmart/santiago/las-rejas'])
  }
  
  malloco(){
    this.router.navigate(['/home/construmart/santiago/malloco'])
  }

  melipilla(){
    this.router.navigate(['/home/construmart/santiago/c-melipilla'])
  }

  Mrodriguez(){
    this.router.navigate(['/home/construmart/santiago/manuel-rodriguez'])
  }

  errazuriz(){
    this.router.navigate(['/home/construmart/santiago/errazuriz'])
  }
  departamental(){
    this.router.navigate(['/home/construmart/santiago/departamental'])
  }
  alamos(){
    this.router.navigate(['/home/construmart/santiago/los-alamos'])
  }
  lascondes(){
    this.router.navigate(['/home/construmart/santiago/las-condes'])
  }
}
