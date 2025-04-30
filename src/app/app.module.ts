import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashCardComponent } from './components/flash-card/flash-card.component';
import { AnaRiskComponent } from './components/ana-risk/ana-risk.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashCardComponent,
    AnaRiskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
