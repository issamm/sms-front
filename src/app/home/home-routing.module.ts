import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { ListeSeancesComponent } from './liste-seances/liste-seances.component';


const routes: Routes = [
    {
        path: '',
        component: MainHomeComponent,
        children: [
            {
                path: 'listeSeances',
                component: ListeSeancesComponent
            },
            { path: '', redirectTo: 'listeSeances' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
