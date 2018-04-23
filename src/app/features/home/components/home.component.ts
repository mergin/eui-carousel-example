import { Component, OnInit } from '@angular/core';

import { ItemCarrousel } from './../../../core/models/ItemCarrousel.model';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    itemsCarrousel: ItemCarrousel[] = [];

    ngOnInit() {
        // this.getDatosCarrousel();
    }

}
