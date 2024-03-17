import { Routes } from '@angular/router';

import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InvalidpageComponent } from './invalidpage/invalidpage.component';


export const routes: Routes = [
    // Specific Route
    {path: 'batchdetails', component: BatchdetailsComponent},
    {path: 'batchlist', component: BatchlistComponent},
    
    // Default Route
    {path: '', component: HomepageComponent},
    
    // Wildcard route/ Invalid Route
    {path: '**', component: InvalidpageComponent},
    
];


