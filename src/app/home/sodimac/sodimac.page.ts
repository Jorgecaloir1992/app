import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sodimac',
  templateUrl: './sodimac.page.html',
  styleUrls: ['./sodimac.page.scss'],
})
export class SodimacPage implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  santiago(){
    this.router.navigate(['/home/sodimac/santiago'])
  }


}
