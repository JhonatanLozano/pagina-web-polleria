import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./paginas/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./paginas/contacto/contacto.page').then( m => m.ContactoPage)
  },
  {
    path: 'productos',
    loadComponent: () => import('./paginas/productos/productos.page').then( m => m.ProductosPage)
  },
  {
    path: 'sobre-nosotros',
    loadComponent: () => import('./paginas/sobre-nosotros/sobre-nosotros.page').then( m => m.SobreNosotrosPage)
  }
  
];
