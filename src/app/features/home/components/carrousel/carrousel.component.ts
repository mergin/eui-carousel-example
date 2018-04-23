import { Component, Input } from '@angular/core';

import { ItemCarrousel } from './../../../../core/models/ItemCarrousel.model';

@Component({
    selector: 'app-carrusel',
    templateUrl: './carrousel.component.html'
})
export class HomeCarrouselComponent {
    @Input() items: ItemCarrousel[];
}
