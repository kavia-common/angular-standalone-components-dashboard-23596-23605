import { Routes } from '@angular/router';
import { IdeLayoutComponent } from './pages/ide-layout/ide-layout.component';
import { ComponentsPageComponent } from './pages/components/components-page.component';

export const routes: Routes = [
  {
    path: '',
    component: IdeLayoutComponent,
  },
  {
    path: 'components',
    component: ComponentsPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
