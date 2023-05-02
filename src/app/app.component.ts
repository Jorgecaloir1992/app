import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular/providers/platform';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  

  public appPages = [
    
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Productos', url:'/productos'  },
    { title: 'Login', url:'/login'  },
    { title: 'Register', url:'/register'  },
    { title: 'Cerrar Seccion', url:'/logut'  },
    
    
  ];

  
}


