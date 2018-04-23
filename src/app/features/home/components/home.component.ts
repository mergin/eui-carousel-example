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
                // tslint:disable-next-line:max-line-length
                imgUrl: 'http://www.wallpapermania.eu/images/lthumbs/2014-02/6780_Wonderful-nature-landscape-beautiful-mountain-preview.jpg',
            },
            {
                id: 2,
                title: 'Supercomputing: a key cornerstone of the data-driven European economy',
                subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, laborum?',
                type: 'RESULTS PACK',
                imgUrl: 'http://ognature.com/wp-content/uploads/2017/10/beach-colors-beautiful-nature-hd-holiday-desktop-wallpaper.jpg',
            },
            {
                id: 3,
                title: 'Seas and oceans - Studying Earth’s final frontier',
                subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, laborum?',
                type: 'RESULTS MAGAZINE',
                imgUrl: 'http://data.1freewallpapers.com/detail/nature-home-spring-desktop-background-images.jpg',
            },
            {
                id: 4,
                title: 'New brain visualisation of Alzheimer’s, at different ages, holds out hope for faster diagnosis and treatment',
                subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, laborum?',
                type: 'NEWS',
                imgUrl: 'http://irigare.com/wp-content/uploads/green-trees-nature-uhd-16-9-luxury-furthermore-forest-spring.jpg',
            },
        ];
    }

}
