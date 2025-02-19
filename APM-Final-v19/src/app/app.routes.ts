import { Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () => import('./products/product.routes').then(r => r.PRODUCT_ROUTES)
  },
  {
    path: 'newproducts',
    loadComponent: () => import('./newproducts/product-list.component').then(c => c.ProductListComponent)
  },
  {
    path: 'submitForm',
    loadComponent: () => import('./submitform/submitform.component').then(c => c.SubmitformComponent)

  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(c => c.AboutComponent)
  },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];
