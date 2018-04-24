import { Component, Input, OnInit } from '@angular/core';

import { ItemCarrousel } from './../../../../core/models/ItemCarrousel.model';

@Component({
    selector: 'app-carrusel',
    templateUrl: './carrousel.component.html',
    styleUrls: ['./carrousel.component.scss']
})
export class HomeCarrouselComponent implements OnInit {
    @Input() items: ItemCarrousel[];
    selectedItem: ItemCarrousel;

    ngOnInit() {
        this.selectedItem = this.items[0];
    }

    onSelect(item: ItemCarrousel): void {
        this.selectedItem = item;
    }

    getUrl() {
        // tslint:disable-next-line:max-line-length
        return 'linear-gradient(171deg, rgba(15, 15, 15, 0.6), rgba(14, 14, 14, 0.63) 49%, rgba(11, 11, 11, 0.27) 82%, rgba(6, 6, 6, 0.07)), url(' + this.selectedItem.imgUrl + ')';
    }

    getUrlItem(item: ItemCarrousel) {
        // tslint:disable-next-line:max-line-length
        return 'linear-gradient(to right, #0f0f0f, rgba(14, 14, 14, 0.84) 67%, rgba(13, 13, 13, 0.64) 84%, rgba(11, 11, 11, 0.35), rgba(6, 6, 6, 0)), url(' + item.imgUrl + ') center / cover';
    }
}
