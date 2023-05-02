import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mts',
  templateUrl: './mts.page.html',
  styleUrls: ['./mts.page.scss'],
})
export class MTSPage implements OnInit {

  constructor(private router: Router) { }

    ngOnInit() {
    }
  
    maule(){
      this.router.navigate(['/home/mts/maule'])
    }
  
    nuble(){
      this.router.navigate(['/home/mts/nuble'])
    }
  
  
    biobio(){
      this.router.navigate(['/home/mts/biobio'])
    }
  
    araucania(){
      this.router.navigate(['/home/mts/araucania'])
    }
  
    losrios(){
      this.router.navigate(['/home/mts/losrios'])
    }
  
    loslagos(){
      this.router.navigate(['/home/mts/loslagos'])
    }
  
    aysen(){
      this.router.navigate(['/home/mts/aysen'])
    }
  
    magallanes(){
      this.router.navigate(['/home/mts/magallanes'])
    }
  }
  
  