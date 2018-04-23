import { Component, OnInit } from '@angular/core';

import { ItemCarrousel } from './../../../core/models/ItemCarrousel.model';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    itemsCarrousel: ItemCarrousel[] = [];

    ngOnInit() {
        this.getDatosCarrousel();
    }

    getDatosCarrousel() {
        // this.itemsCarrousel = this.cordisService.getItemsCarrousel();
        this.itemsCarrousel = [
            {
                id: 1,
                title: 'Growing grasses on the margins, the route to cost effective biomass crops',
                // tslint:disable-next-line:max-line-length
                subtitle: 'Technologies guaranteeing acceptable indoor air quality in EU buildings will be key to the market success of energy efficient solutions.',
                type: 'result IN BRIEF',
            },
            {
                id: 2,
                title: 'Supercomputing: a key cornerstone of the data-driven European economy',
                subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, laborum?',
                type: 'RESULTS PACK',
            },
            {
                id: 3,
                title: 'Seas and oceans - Studying Earth’s final frontier',
                subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, laborum?',
                type: 'RESULTS MAGAZINE',
            },
            {
                id: 4,
                title: 'New brain visualisation of Alzheimer’s, at different ages, holds out hope for faster diagnosis and treatment',
                subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, laborum?',
                type: 'NEWS',
            },
        ];
    }

}
