import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Menus } from './pages/menus/menus';

export const routes: Routes = [
  {
    path: '',
    component: Main,
  },
  {
    path: 'menus',
    component: Menus,
  },
];
