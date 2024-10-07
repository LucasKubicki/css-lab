import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../app.routes';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-feature-list',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './feature-list.component.html',
    styleUrl: './feature-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureListComponent {
    readonly features = routes.filter((route) => route.path !== '');
}
