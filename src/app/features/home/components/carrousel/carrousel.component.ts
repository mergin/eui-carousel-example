import { Component, Input } from '@angular/core';

import { ItemCarrousel } from './../../../../core/models/ItemCarrousel.model';

@Component({
    selector: 'app-carrusel',
    templateUrl: './carrousel.component.html',
    styleUrls: ['./carrousel.component.scss']
})
export class HomeCarrouselComponent {
    @Input() items: ItemCarrousel[];
}
