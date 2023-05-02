import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SantiagoPage } from './santiago.page';

const routes: Routes = [
  {
    path: '',
    component: SantiagoPage
  },
  {
    path: 'costanera',
    loadChildren: () => import('./costanera/costanera.module').then( m => m.CostaneraPageModule)
  },
  {
    path: 'llano',
    loadChildren: () => import('./llano/llano.module').then( m => m.LlanoPageModule)
  },
  {
    path: 'ochagavia',
    loadChildren: () => import('./ochagavia/ochagavia.module').then( m => m.OchagaviaPageModule)
  },
  {
    path: 'lascondes',
    loadChildren: () => import('./lascondes/lascondes.module').then( m => m.LascondesPageModule)
  },
  {
    path: 'florida',
    loadChildren: () => import('./florida/florida.module').then( m => m.FloridaPageModule)
  },
  {
    path: 'reina',
    loadChildren: () => import('./reina/reina.module').then( m => m.ReinaPageModule)
  },
  {
    path: 'cerrillo',
    loadChildren: () => import('./cerrillo/cerrillo.module').then( m => m.CerrilloPageModule)
  },
  {
    path: 'maipu',
    loadChildren: () => import('./maipu/maipu.module').then( m => m.MaipuPageModule)
  },
  {
    path: 'quilin',
    loadChildren: () => import('./quilin/quilin.module').then( m => m.QuilinPageModule)
  },
  {
    path: 'puente-alto',
    loadChildren: () => import('./puente-alto/puente-alto.module').then( m => m.PuenteAltoPageModule)
  },
  {
    path: 'quilicura',
    loadChildren: () => import('./quilicura/quilicura.module').then( m => m.QuilicuraPageModule)
  },
  {
    path: 'dehesa',
    loadChildren: () => import('./dehesa/dehesa.module').then( m => m.DehesaPageModule)
  },
  {
    path: 'p-nunoa',
    loadChildren: () => import('./p-nunoa/p-nunoa.module').then( m => m.PNunoaPageModule)
  },
  {
    path: 'bernardo',
    loadChildren: () => import('./bernardo/bernardo.module').then( m => m.BernardoPageModule)
  },
  {
    path: 's-amalia',
    loadChildren: () => import('./s-amalia/s-amalia.module').then( m => m.SAmaliaPageModule)
  },
  {
    path: 'chicureo',
    loadChildren: () => import('./chicureo/chicureo.module').then( m => m.ChicureoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SantiagoPageRoutingModule {}
