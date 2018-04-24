import { Component, OnInit } from '@angular/core';

import { CordisService } from './../../../core/services/cordis.service';

import { ItemCarrousel } from './../../../core/models/ItemCarrousel.model';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    itemsCarrousel: ItemCarrousel[] = [];

    constructor(private cordisService: CordisService) {}

    ngOnInit() {
        this.getDatosCarrousel();
    }

    getDatosCarrousel() {
        this.itemsCarrousel = this.cordisService.getItemsCarrousel();
    }
}
