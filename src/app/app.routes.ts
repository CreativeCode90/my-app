import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    // {path : "" , redirectTo:'/home' , pathMatch:"full" },
    // {path : "home", component: HomeComponent}
    {path : "", component: HomeComponent},
    {path : 'About/:id' , component: AboutComponent },

];
