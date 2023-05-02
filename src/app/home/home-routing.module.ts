import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'sodimac',
    loadChildren: () => import('./sodimac/sodimac.module').then( m => m.SodimacPageModule)
  },
  {
    path: 'easy',
    loadChildren: () => import('./easy/easy.module').then( m => m.EasyPageModule)
  },
  {
    path: 'construmart',
    loadChildren: () => import('./construmart/construmart.module').then( m => m.ConstrumartPageModule)
  },
  {
    path: 'imperial',
    loadChildren: () => import('./imperial/imperial.module').then( m => m.ImperialPageModule)
  },
  {
    path: 'casaroyal',
    loadChildren: () => import('./casaroyal/casaroyal.module').then( m => m.CasaroyalPageModule)
  },
  {
    path: 'mts',
    loadChildren: () => import('./mts/mts.module').then( m => m.MTSPageModule)
  },
  {
    path: 'yolito',
    loadChildren: () => import('./yolito/yolito.module').then( m => m.YolitoPageModule)
  },
  {
    path: 'chilemat',
    loadChildren: () => import('./chilemat/chilemat.module').then( m => m.ChilematPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
