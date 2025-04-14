import { Routes } from '@angular/router';
import { AboutPage } from './pages/about/about.component';
import { HomePage } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
];
