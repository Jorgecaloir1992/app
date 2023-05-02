import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casaroyal',
  templateUrl: './casaroyal.page.html',
  styleUrls: ['./casaroyal.page.scss'],
})
export class CasaroyalPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  maule(){
    this.router.navigate(['/home/casaroyal/maule'])
  }

  nuble(){
    this.router.navigate(['/home/casaroyal/nuble'])}

  biobio(){
    this.router.navigate(['/home/casaroyal/biobio'])
  }

  araucania(){
    this.router.navigate(['/home/casaroyal/araucania'])
  }

  losrios(){
    this.router.navigate(['/home/casaroyal/losrios'])
  }

  loslagos(){
    this.router.navigate(['/home/casaroyal/loslagos'])
  }

  aysen(){
    this.router.navigate(['/home/ccasaroyalaysen'])
  }

  magallanes(){
    this.router.navigate(['/home/casaroyal/magallanes'])
  }

}
