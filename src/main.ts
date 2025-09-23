import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Home } from './app/home/home';
import { provideServiceWorker } from '@angular/service-worker';
import { isDevMode } from '@angular/core';

bootstrapApplication(Home, {

  providers: [

    provideServiceWorker('ngsw-worker.js', { enabled: !isDevMode() }),

  ],

});