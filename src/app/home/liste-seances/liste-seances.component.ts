import { Component, OnInit } from '@angular/core';

export interface Project {
    number: string;
    theme: string;
    content: string;
    objectifs: string;
}

const ELEMENT_DATA: Project[] = [
    { number: '1', theme: 'Le stress : comment y faire face ?', content: 'Déf, présentation du modèle de Folkman & Lazarus', objectifs: 'Psychoéducation = 1) comprendre que le stress ressenti est un processus qui dépend de plusieurs variables 2) comment agir sur ces variables pour augmenter notre résilience' },
    { number: '2', theme: 'Situations durables hautement stressantes : stratégies utiles pour se protéger', content: 'Rentrer dans les détails sur le stress (produit final perçuu = stratégies de relaxation + comportementales pour réduire son impact', objectifs: 'Stratégies comportementales et relaxation' },
    { number: '3', theme: 'Agir en amont pour réagir sur le moment', content: 'Mindfulness', objectifs: '' },
];

@Component({
    selector: 'app-liste-seances',
    templateUrl: './liste-seances.component.html',
    styleUrls: ['./liste-seances.component.css']
})
export class ListeSeancesComponent implements OnInit {

    displayedColumns: string[] = ['number', 'theme', 'content', 'objectifs', 'actions'];
    dataSource = ELEMENT_DATA;
    constructor() { }

    ngOnInit() {
    }

}

