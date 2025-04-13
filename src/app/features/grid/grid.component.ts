import { ChangeDetectionStrategy, Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-grid',
    standalone: true,
    imports: [NgClass],
    templateUrl: './grid.component.html',
    styleUrl: './grid.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
    gridStyle = 'style-columns';
    constructor() {}
}
