import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yolito',
  templateUrl: './yolito.page.html',
  styleUrls: ['./yolito.page.scss'],
})
export class YolitoPage implements OnInit {

 

  constructor(private router: Router) { }

    ngOnInit() {
    }
  
    maule(){
      this.router.navigate(['/home/yolito/maule'])
    }
  
    nuble(){
      this.router.navigate(['/home/yolito/nuble'])
    }
  
  
    biobio(){
      this.router.navigate(['/home/yolito/biobio'])
    }
  
    araucania(){
      this.router.navigate(['/home/yolito/araucania'])
    }
  
    losrios(){
      this.router.navigate(['/home/yolito/losrios'])
    }
  
    loslagos(){
      this.router.navigate(['/home/yolito/loslagos'])
    }
  
    aysen(){
      this.router.navigate(['/home/yolito/aysen'])
    }
  
    magallanes(){
      this.router.navigate(['/home/yolito/magallanes'])
    }
  }
  
  