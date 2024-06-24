import { Component } from '@angular/core';

@Component({
    selector: 'sanabi-text.feature',
    standalone: true,
    imports: [],
    templateUrl: './sanabi-text.component.html',
    styleUrl: './sanabi-text.component.css'
})
export class SanabiTextComponent {
    textToDisplay = 'Hello, Sanabi! Nice to meet you!';
}
