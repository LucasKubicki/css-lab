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
    },
    {
        path: 'sanabi-text',
        loadComponent: () => import('./features/sanabi-text/sanabi-text.component').then((m) => m.SanabiTextComponent)
    },
    {
        path: 'color-mix',
        loadComponent: () => import('./features/color-mix/color-mix.component').then((m) => m.ColorMixComponent)
    },
    {
        path: 'grid',
        loadComponent: () => import('./features/grid/grid.component').then((cmp) => cmp.GridComponent)
    },
    {
        path: 'carousel',
        loadComponent: () => import('./features/carousel/carousel.component').then((cmp) => cmp.CarouselComponent)
    }
];
