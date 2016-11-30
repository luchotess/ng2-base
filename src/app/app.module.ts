import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { BrowserModule }          from '@angular/platform-browser';
import { HttpModule }             from '@angular/http';
import { UIRouterModule, UIView } from "ui-router-ng2";
import { AppComponent }           from './app.component';
import { StartModule }            from './start/start.module';
import { SharedModule }           from './shared/shared.module';
import { APIResolve }             from "./shared/api/api.resolve";
import { ErrorHandlerService }    from "./errors/error.handler.service";
import { ErrorModule }            from "./errors/error.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SharedModule,
    StartModule,
    ErrorModule,
    UIRouterModule.forRoot({
      states: [{
        name: 'app',
        component: AppComponent,
        url: '/'
      }],
      otherwise: { state: 'app.error404' }
    }),
  ],
  declarations: [
    AppComponent
  ],
  providers: [APIResolve, ErrorHandlerService],
  bootstrap: [UIView]
})
export class AppModule {}


