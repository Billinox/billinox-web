import { Routes } from '@angular/router';
import { blogPostResolver } from './resolvers/blog-post-resolver';
import { toolsRoutes } from './routes/tools/tools.routes';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./routes/landing/home/home').then((m) => m.Home),
  },
  {
    path: 'blog',
    loadComponent: () => import('./routes/landing/blog/blog').then((m) => m.Blog),
  },
  {
    path: 'blog/:slug',

    loadComponent: () =>
      import('./routes/landing/blog-article/blog-article').then((m) => m.BlogArticle),
    resolve: {
      post: blogPostResolver,
    },
  },
  {
    path: 'get-started',
    loadComponent: () =>
      import('./routes/landing/get-started/get-started').then((m) => m.GetStartedPage),
  },
  {
    path: 'help-center',
    loadComponent: () => import('./routes/landing/help/help').then((m) => m.HelpPage),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./routes/landing/about/about').then((m) => m.AboutPage),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./routes/landing/contact/contact').then((m) => m.ContactPage),
  },
  {
    path: 'guides',
    loadComponent: () => import('./routes/landing/guides/guides').then((m) => m.Guides),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./routes/landing/privacy/privacy').then((m) => m.Privacy),
  },
  {
    path: 'terms',
    loadComponent: () => import('./routes/landing/terms/terms').then((m) => m.Terms),
  },
  {
    path: 'use-of-service',
    loadComponent: () =>
      import('./routes/landing/use-of-service/use-of-service').then(
        (m) => m.UseOfService,
      ),
  },
  ...toolsRoutes,
  {
    path: 'error',
    loadComponent: () =>
      import('./routes/errors/error/error').then((m) => m.Error),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./routes/errors/not-found-error/not-found-error').then(
        (m) => m.NotFoundError,
      ),
  },
];
