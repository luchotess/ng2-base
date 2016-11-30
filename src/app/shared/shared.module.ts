import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';

let SharedModules: Array<any> = [
];

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: SharedModules,
  exports: SharedModules,
  bootstrap: []
})

export class SharedModule {}
