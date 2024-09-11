import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';


export class AppModule { }

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
