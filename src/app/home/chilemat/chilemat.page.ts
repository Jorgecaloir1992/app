import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chilemat',
  templateUrl: './chilemat.page.html',
  styleUrls: ['./chilemat.page.scss'],
})
export class ChilematPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  maule(){
    this.router.navigate(['/home/chilemat/maule'])
  }

  nuble(){
    this.router.navigate(['/home/chilemat/nuble'])
  }


  biobio(){
    this.router.navigate(['/home/chilemat/biobio'])
  }

  araucania(){
    this.router.navigate(['/home/chilemat/araucania'])
  }

  losrios(){
    this.router.navigate(['/home/chilemat/losrios'])
  }

  loslagos(){
    this.router.navigate(['/home/chilemat/loslagos'])
  }

  aysen(){
    this.router.navigate(['/home/chilemat/aysen'])
  }

  magallanes(){
    this.router.navigate(['/home/chilemat/magallanes'])
  }
}

