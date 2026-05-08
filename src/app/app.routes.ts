import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./routes/home/home').then((m) => m.Home),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./routes/privacy/privacy').then((m) => m.Privacy),
  },
  {
    path: 'terms',
    loadComponent: () => import('./routes/terms/terms').then((m) => m.Terms),
  },
  {
    path: 'use-of-service',
    loadComponent: () =>
      import('./routes/use-of-service/use-of-service').then(
        (m) => m.UseOfService,
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./routes/errors/not-found-error/not-found-error').then(
        (m) => m.NotFoundError,
      ),
  },
];
