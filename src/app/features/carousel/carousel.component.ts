import { ChangeDetectionStrategy, Component, computed, signal, viewChild } from '@angular/core';
import { interval, timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-carousel',
    standalone: true,
    imports: [],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent {
    items = [1, 2, 3, 4];
    carousel = viewChild<any>('carousel');

    constructor() {
        timer(1000)
            .pipe(takeUntilDestroyed())
            .subscribe(() => {
                let carouselEl = this.carousel().nativeElement as HTMLElement;
                if (!carouselEl) return;
                carouselEl.scrollTo(carouselEl.clientWidth, 0);

                let div = document.createElement('div');
                div.className = 'carousel-item';
                let img = document.createElement('img');
                img.src = '/images/1.jpg';
                div.append(img);
                carouselEl.append(div);
            });
    }
}
