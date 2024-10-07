import { afterRender, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    title = 'css-lab';

    constructor() {
        console.log('AppComponent constructor');

        afterRender(() => {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
                if (matches) {
                    console.log('change to dark mode!');
                } else {
                    console.log('change to light mode!');
                }
            });
        });
    }

    ngOnInit() {}

    switchTheme() {
        document.body.classList.toggle('light-theme');
    }
}
