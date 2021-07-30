import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { AllComponent } from './components/all/all.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'all',
    component: AllComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'movies',
    loadChildren: () => import('./components/movies/movies.module').then(mod => mod.MoviesModule)
  },

  {
    path: 'movies/:id', loadChildren: () => import('./components/movie-details/movie-details.module').then(mod => mod.MovieDetailsModule)
  },

  {
    path: 'tv',
    loadChildren: () => import('./components/tv-shows/tv-shows.module').then(mod => mod.TvShowsModule)
  },

  {
    path: 'tv/:id',
    loadChildren: () => import('./components/tv-show-details/tv-show-details.module').then(mod => mod.TvShowDetailsModule)
  },

  {
    path: 'genres/:id/:name',
    loadChildren: () => import('./components/genre/genre.module').then(mod => mod.GenreModule)
  },

  {
    path: 'genres',
    loadChildren: () => import('./components/genre-list/genre-list.module').then(mod => mod.GenreListModule)
  },

  {
    path: 'person/:id',
    loadChildren: () => import('./components/person/person.module').then(mod => mod.PersonModule)
  },

  {
    path: 'genres-tv/:id/:name',
    loadChildren: () => import('./components/tv-genre/tv-genre.module').then(m => m.TvGenreModule)
  },

  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
