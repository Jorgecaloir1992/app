import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-construmart',
  templateUrl: './construmart.page.html',
  styleUrls: ['./construmart.page.scss'],
})
export class ConstrumartPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  santiago(){
    this.router.navigate(['/home/construmart/santiago'])
  }

}
