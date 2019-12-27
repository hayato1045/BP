import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},

  {
    path: 'next',
    loadChildren: () => import('./next/next.module').then( m => m.NextPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then( m => m.ShopPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  // {path: 'next',loadChildren: () => import('./next/next.module')},
  // {path: 'next',loadChildren: () => import('./next/next.module#NextPageModule')}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
