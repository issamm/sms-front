import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-detail-seance-start-with-questions',
    templateUrl: './detail-seance-start-with-questions.component.html',
    styleUrls: ['./detail-seance-start-with-questions.component.css']
})
export class DetailSeanceStartWithQuestionsComponent implements OnInit {

    val1: number;
    constructor() {
        this.val1 = 5
    }

    ngOnInit() {
    }

}
