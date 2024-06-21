import { Routes } from '@angular/router';
import { FeatureListComponent } from './feature-list/feature-list.component';

export const routes: Routes = [
    {
        path: '',
        component: FeatureListComponent
    },
    {
        path: 'one-line-css',
        loadComponent: () => import('./features/one-line-css/one-line-css.component').then((m) => m.OneLineCssComponent)
    }
];
