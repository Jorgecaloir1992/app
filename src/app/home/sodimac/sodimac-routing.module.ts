import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodimacPage } from './sodimac.page';

const routes: Routes = [
  {
    path: '',
    component: SodimacPage
  },
  {
    path: 'maule',
    loadChildren: () => import('./maule/maule.module').then( m => m.MaulePageModule)
  },
  {
    path: 'nuble',
    loadChildren: () => import('./nuble/nuble.module').then( m => m.NublePageModule)
  },
  {
    path: 'biobio',
    loadChildren: () => import('./biobio/biobio.module').then( m => m.BiobioPageModule)
  },
  {
    path: 'araucania',
    loadChildren: () => import('./araucania/araucania.module').then( m => m.AraucaniaPageModule)
  },
  {
    path: 'losrios',
    loadChildren: () => import('./losrios/losrios.module').then( m => m.LosriosPageModule)
  },
  {
    path: 'loslagos',
    loadChildren: () => import('./loslagos/loslagos.module').then( m => m.LoslagosPageModule)
  },
  {
    path: 'aysen',
    loadChildren: () => import('./aysen/aysen.module').then( m => m.AysenPageModule)
  },
  {
    path: 'magallanes',
    loadChildren: () => import('./magallanes/magallanes.module').then( m => m.MagallanesPageModule)
  },
  {
    path: 'santiago',
    loadChildren: () => import('./santiago/santiago.module').then( m => m.SantiagoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodimacPageRoutingModule {}
