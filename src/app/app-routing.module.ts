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
  {
    path: 'shop-cafe',
    loadChildren: () => import('./shop-cafe/shop-cafe.module').then( m => m.ShopCafePageModule)
  },
  {
    path: 'shop-sweets',
    loadChildren: () => import('./shop-sweets/shop-sweets.module').then( m => m.ShopSweetsPageModule)
  },
  {
    path: 'shop-barkery',
    loadChildren: () => import('./shop-barkery/shop-barkery.module').then( m => m.ShopBarkeryPageModule)
  },
  {
    path: 'news-text',
    loadChildren: () => import('./news-text/news-text.module').then( m => m.NewsTextPageModule)
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
