import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


const no = 0;
const yes = 1;

@Component({
    selector: 'app-main-home',
    templateUrl: './main-home.component.html',
    styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

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


export interface PleaseHelpDialogData {
    post: string;
}


@Component({
    selector: 'please-help-alert-dialog',
    templateUrl: 'please-help-alert-dialog.html',
})
export class PleaseHelpAlertDialog {

    constructor(
        public dialogRef: MatDialogRef<PleaseHelpDialogData>,
        @Inject(MAT_DIALOG_DATA) public data: PleaseHelpDialogData) {
    }

    onNoClick(): void {
        this.dialogRef.close(no);
    }
}