import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SantiagoPage } from './santiago.page';

const routes: Routes = [
  {
    path: '',
    component: SantiagoPage
  },
  {
    path: 'sodimac-plaza-oeste',
    loadChildren: () => import('./sodimac-plaza-oeste/sodimac-plaza-oeste.module').then( m => m.SodimacPlazaOestePageModule)
  },
  {
    path: 'sodimac-plaza-norte',
    loadChildren: () => import('./sodimac-plaza-norte/sodimac-plaza-norte.module').then( m => m.SodimacPlazaNortePageModule)
  },
  {
    path: 'sodimac-plaza-vespucio',
    loadChildren: () => import('./sodimac-plaza-vespucio/sodimac-plaza-vespucio.module').then( m => m.SodimacPlazaVespucioPageModule)
  },
  {
    path: 'sodimac-quilin',
    loadChildren: () => import('./sodimac-quilin/sodimac-quilin.module').then( m => m.SodimacQuilinPageModule)
  },
  {
    path: 'sodimac-quilicura',
    loadChildren: () => import('./sodimac-quilicura/sodimac-quilicura.module').then( m => m.SodimacQuilicuraPageModule)
  },
  {
    path: 'sodimac-el-bosque',
    loadChildren: () => import('./sodimac-el-bosque/sodimac-el-bosque.module').then( m => m.SodimacElBosquePageModule)
  },
  {
    path: 'sodimac-puente-alto',
    loadChildren: () => import('./sodimac-puente-alto/sodimac-puente-alto.module').then( m => m.SodimacPuenteAltoPageModule)
  },
  {
    path: 'sodimac-tobalaba',
    loadChildren: () => import('./sodimac-tobalaba/sodimac-tobalaba.module').then( m => m.SodimacTobalabaPageModule)
  },
  {
    path: 'sodimac-kennedy',
    loadChildren: () => import('./sodimac-kennedy/sodimac-kennedy.module').then( m => m.SodimacKennedyPageModule)
  },
  {
    path: 'sodimac-la-reina',
    loadChildren: () => import('./sodimac-la-reina/sodimac-la-reina.module').then( m => m.SodimacLaReinaPageModule)
  },
  {
    path: 'sodimac-los-dominicos',
    loadChildren: () => import('./sodimac-los-dominicos/sodimac-los-dominicos.module').then( m => m.SodimacLosDominicosPageModule)
  },
  {
    path: 'sodimac-las-condes',
    loadChildren: () => import('./sodimac-las-condes/sodimac-las-condes.module').then( m => m.SodimacLasCondesPageModule)
  },
  {
    path: 'sodimac-macul',
    loadChildren: () => import('./sodimac-macul/sodimac-macul.module').then( m => m.SodimacMaculPageModule)
  },
  {
    path: 'sodimac-independencia',
    loadChildren: () => import('./sodimac-independencia/sodimac-independencia.module').then( m => m.SodimacIndependenciaPageModule)
  },
  {
    path: 'sodimac-san-miguel',
    loadChildren: () => import('./sodimac-san-miguel/sodimac-san-miguel.module').then( m => m.SodimacSanMiguelPageModule)
  },
  {
    path: 'sodimac-nuble',
    loadChildren: () => import('./sodimac-nuble/sodimac-nuble.module').then( m => m.SodimacNublePageModule)
  },
  {
    path: 'sodimac-maipu',
    loadChildren: () => import('./sodimac-maipu/sodimac-maipu.module').then( m => m.SodimacMaipuPageModule)
  },
  {
    path: 'sodimac-estacion',
    loadChildren: () => import('./sodimac-estacion/sodimac-estacion.module').then( m => m.SodimacEstacionPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SantiagoPageRoutingModule {}
