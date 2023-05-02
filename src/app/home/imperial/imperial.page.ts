import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imperial',
  templateUrl: './imperial.page.html',
  styleUrls: ['./imperial.page.scss'],
})
export class ImperialPage implements OnInit {

  constructor(private router: Router) { }

    ngOnInit() {
    }
  
    maule(){
      this.router.navigate(['/home/imperial/maule'])
    }
  
    nuble(){
      this.router.navigate(['/home/imperial/nuble'])
    }
  
  
    biobio(){
      this.router.navigate(['/home/imperial/biobio'])
    }
  
    araucania(){
      this.router.navigate(['/home/imperial/araucania'])
    }
  
    losrios(){
      this.router.navigate(['/home/imperial/losrios'])
    }
  
    loslagos(){
      this.router.navigate(['/home/imperial/loslagos'])
    }
  
    aysen(){
      this.router.navigate(['/home/imperial/aysen'])
    }
  
    magallanes(){
      this.router.navigate(['/home/imperial/magallanes'])
    }
  }
  
  