import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { UIRouterModule } from "ui-router-ng2";
import { StartComponent } from './start/start.component';
import { StartService }   from "./start/start.service";
import { SharedModule }   from '../shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    UIRouterModule.forChild({ states: [
      {
        name: 'app.start',
        component: StartComponent,
        url: '/start'
      }
    ]})
  ],
  declarations: [
    StartComponent
  ],
  providers: [StartService],
  bootstrap: [StartComponent]
})
export class StartModule {}


