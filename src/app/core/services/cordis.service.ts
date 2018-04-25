import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CordisService {

    itemsCarrousel = [
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
            // imgUrl: 'http://ognature.com/wp-content/uploads/2017/10/beach-colors-beautiful-nature-hd-holiday-desktop-wallpaper.jpg',
            imgUrl: 'https://st.depositphotos.com/1141522/4768/i/950/depositphotos_47681805-stock-photo-flask-with-clear-water-and.jpg',
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
        {
            id: 5,
            // tslint:disable-next-line:max-line-length
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, quod laboriosam! Atque, assumenda quisquam incidunt laudantium molestiae odio animi voluptates unde cupiditate ex provident inventore, suscipit odit modi maiores vitae?',
            // tslint:disable-next-line:max-line-length
            subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, libero recusandae magnam eos praesentium quasi consequatur earum aperiam culpa totam ipsum eligendi corporis non, nisi illum similique? Dolorum repellat ad numquam nemo, mollitia accusamus amet, voluptates deleniti quod possimus ipsam enim aperiam sit molestias suscipit! Autem corrupti maxime qui odit.',
            type: 'interviews',
            imgUrl: 'https://media.istockphoto.com/photos/various-bacteria-cells-and-virus-picture-id637429506?s=2048x2048',
        },
    ];

    constructor(protected http: HttpClient) {
    }

    getItemsCarrousel(): any[] {
        return this.itemsCarrousel;
    }
}
