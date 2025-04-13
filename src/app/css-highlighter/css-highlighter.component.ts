import { Component, viewChild } from '@angular/core';

@Component({
    selector: 'css-highlighter',
    templateUrl: './css-highlighter.component.html',
    styleUrl: './css-highlighter.component.css',
    standalone: true
})
export class CssHighlighterComponent {
    code: string = '';
    codeElement: any = viewChild('codeElement');

    constructor() {}

    onChange(event: any) {
        let value = event.target.value;
        let Prism = (window as any).Prism;
        let codeHighlighted = Prism.highlight(value, Prism.languages.css, 'css');
        this.code = codeHighlighted;
        return;
    }
}
