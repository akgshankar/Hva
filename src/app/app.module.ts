import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HvaModule } from './hva/hva.module';

import { CricModule } from './cric/cric.module';

 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HvaModule,
    CricModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
