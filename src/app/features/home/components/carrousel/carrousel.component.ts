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
        return 'url(' + this.selectedItem.imgUrl + ')';
    }

    getUrlItem(item: ItemCarrousel) {
        return 'url(' + item.imgUrl + ')';
    }
}
