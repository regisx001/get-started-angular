import { Routes } from '@angular/router';
import { AboutPage } from './about/about.component';
import { HomePage } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
];
