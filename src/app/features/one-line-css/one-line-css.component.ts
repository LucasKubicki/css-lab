import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'one-line-css.feature',
    standalone: true,
    imports: [],
    templateUrl: './one-line-css.component.html',
    styleUrl: './one-line-css.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneLineCssComponent {}
