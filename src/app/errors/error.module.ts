import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { UIRouterModule }           from "ui-router-ng2";
import { SharedModule }             from '../shared/shared.module';
import { Error404Component }        from './http/error404/error404.component';
import { Error500Component }        from "./http/error500/error500";

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    UIRouterModule.forChild({ states: [
      {
        name: 'app.error404',
        component: Error404Component,
        url: 'not-found'
      },
      {
        name: 'app.error500',
        component: Error500Component,
        url: 'error'
      }
    ]})
  ],
  declarations: [
    Error404Component,
    Error500Component,
  ]
})
export class ErrorModule {}


