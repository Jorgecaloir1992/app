import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-easy',
  templateUrl: './easy.page.html',
  styleUrls: ['./easy.page.scss'],
})
export class EasyPage implements OnInit {


    private productos = [

      {
        id:'1',
        titulo: 'I REGION',
        url: "https://www.colombochilena.com/public/uploads/2015/12/EASY-1.png"

      },
    ];


    constructor(private router: Router) { }
 
    ngOnInit() {
    }
  
    santiago(){
      this.router.navigate(['/home/easy/santiago'])
    }
  
    nuble(){
      this.router.navigate(['/home/easy/nuble'])
    }
  
  
    biobio(){
      this.router.navigate(['/home/easy/biobio'])
    }
  
    araucania(){
      this.router.navigate(['/home/easy/araucania'])
    }
  
    losrios(){
      this.router.navigate(['/home/easy/losrios'])
    }
  
    loslagos(){
      this.router.navigate(['/home/easy/loslagos'])
    }
  
    aysen(){
      this.router.navigate(['/home/easy/aysen'])
    }
  
    magallanes(){
      this.router.navigate(['/home/easy/magallanes'])
    }
  }
  
  