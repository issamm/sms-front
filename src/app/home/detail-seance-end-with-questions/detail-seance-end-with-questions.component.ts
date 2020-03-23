import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PleaseHelpAlertDialog } from '../main-home/main-home.component';

@Component({
    selector: 'app-detail-seance-end-with-questions',
    templateUrl: './detail-seance-end-with-questions.component.html',
    styleUrls: ['./detail-seance-end-with-questions.component.css']
})
export class DetailSeanceEndWithQuestionsComponent implements OnInit {

    val1: number;

    constructor(public dialog: MatDialog) { }

    ngOnInit() {
    }

    openPleaseCallMe() {
        let data = {};
        const dialogRef = this.dialog.open(PleaseHelpAlertDialog, {
            height: '300px',
            width: '600px',
            data: data
        });
    }

}
