import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { MAT_DATE_LOCALE, GestureConfig } from '@angular/material/core';

registerLocaleData(localeFr, 'fr');

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [
        { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
        { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }],
    bootstrap: [AppComponent]
})
export class AppModule { }
