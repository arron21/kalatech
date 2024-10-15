import { Routes } from '@angular/router';
import { AboutComponent } from '@pages/about/about.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { HomeComponent } from '@pages/home/home.component';
import { PortfolioComponent } from '@pages/portfolio/portfolio.component';
import { ServicesComponent } from '@pages/services/services.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
