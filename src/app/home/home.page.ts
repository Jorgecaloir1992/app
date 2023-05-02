import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({  
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sodimac(){
    this.router.navigate(['/home/sodimac'])
  }
  
  easy(){
    this.router.navigate(['/home/easy'])
  }

  construmart(){
    this.router.navigate(['/home/construmart'])
  }

  casaroyal(){
    this.router.navigate(['/home/casaroyal'])
  }

  mts(){
    this.router.navigate(['/home/mts'])
  }

  imperial(){
    this.router.navigate(['/home/imperial'])
  }

  yolito(){
    this.router.navigate(['/home/yolito'])
  }

  chilemat(){
    this.router.navigate(['/home/chilemat'])
  }
}
