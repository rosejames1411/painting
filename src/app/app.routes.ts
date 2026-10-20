import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { PaintingsComponent } from './pages/paintings/paintings';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'paintings',
    component: PaintingsComponent
  }
];