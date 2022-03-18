import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CooperationListComponent } from './pages/cooperation-list/cooperation-list.component';
import { DetailsCooperationComponent } from './pages/details-cooperation/details-cooperation.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: CooperationListComponent,
                data: {
                    title: 'Cooperations list'
                }
            },
            {
                path: 'details/:id',
                component: DetailsCooperationComponent,
                data: {
                    title: 'Cooperation details'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CooperationsRoutingModule { }
