import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { MoviesWishList } from './components/movies-wish-list/movies-wish-list';
import { MoviesSearch } from './components/movies-search/movies-search';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'wishlist', component: MoviesWishList },
  { path: 'movies-search', component: MoviesSearch },
  {
  path: 'movie/:id',
  loadComponent: () =>
    import('./components/movies-list-details/movies-list-details').then(m => m.MoviesListDetails),
}

];
