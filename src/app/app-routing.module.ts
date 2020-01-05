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
  {
    path: 'news-cafe',
    loadChildren: () => import('./news-cafe/news-cafe.module').then( m => m.NewsCafePageModule)
  },
  {
    path: 'shop-bakery',
    loadChildren: () => import('./shop-bakery/shop-bakery.module').then( m => m.ShopBakeryPageModule)
  },
  {
    path: 'news-sweets',
    loadChildren: () => import('./news-sweets/news-sweets.module').then( m => m.NewsSweetsPageModule)
  },
  {
    path: 'news-bakery',
    loadChildren: () => import('./news-bakery/news-bakery.module').then( m => m.NewsBakeryPageModule)
  },
  {
    path: 'news-text-cafe',
    loadChildren: () => import('./news-text-cafe/news-text-cafe.module').then( m => m.NewsTextCafePageModule)
  },
  {
    path: 'news-text-sweets',
    loadChildren: () => import('./news-text-sweets/news-text-sweets.module').then( m => m.NewsTextSweetsPageModule)
  },
  {
    path: 'news-text-bakery',
    loadChildren: () => import('./news-text-bakery/news-text-bakery.module').then( m => m.NewsTextBakeryPageModule)
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
