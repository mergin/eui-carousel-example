import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home.component';
import { HomeCarrouselComponent } from './components/carrousel/carrousel.component';

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule,
    ],
    declarations: [
        HomeComponent,
        HomeCarrouselComponent,
    ],
    providers: [
    ],
})
export class HomeModule {
}
