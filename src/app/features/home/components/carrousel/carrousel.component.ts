import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-carrusel',
    templateUrl: './carrousel.component.html'
})
export class HomeCarrouselComponent {
    @Input() items: any[];
}
