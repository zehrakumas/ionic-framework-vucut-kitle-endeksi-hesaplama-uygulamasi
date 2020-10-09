import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sayfa1',
    loadChildren: () => import('./sayfa1/sayfa1.module').then( m => m.Sayfa1PageModule)
  },
  {
    path: 'sayfa2',
    loadChildren: () => import('./sayfa2/sayfa2.module').then( m => m.Sayfa2PageModule)
  },
  {
    path: 'sayfa3',
    loadChildren: () => import('./sayfa3/sayfa3.module').then( m => m.Sayfa3PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
