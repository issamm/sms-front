import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { ListeSeancesComponent } from './liste-seances/liste-seances.component';
import { DetailSeanceMainComponent } from './detail-seance-main/detail-seance-main.component';
import { DetailSeanceStartWithQuestionsComponent } from './detail-seance-start-with-questions/detail-seance-start-with-questions.component';
import { DetailSeanceMiddleWithVideoComponent } from './detail-seance-middle-with-video/detail-seance-middle-with-video.component';
import { DetailSeanceEndWithQuestionsComponent } from './detail-seance-end-with-questions/detail-seance-end-with-questions.component';


const routes: Routes = [
    {
        path: '',
        component: MainHomeComponent,
        children: [
            {
                path: 'listeSeances',
                component: ListeSeancesComponent
            },
            {
                path: 'seance/:id',
                component: DetailSeanceMainComponent,
                children: [
                    {
                        path: 'start',
                        component: DetailSeanceStartWithQuestionsComponent
                    },
                    {
                        path: 'content',
                        component: DetailSeanceMiddleWithVideoComponent
                    },
                    {
                        path: 'end',
                        component: DetailSeanceEndWithQuestionsComponent
                    },
                    { path: '', redirectTo: 'start' }
                ]
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
