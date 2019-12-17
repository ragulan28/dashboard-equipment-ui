import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EquipmentCardComponent } from './home/equipment-card/equipment-card.component';
import { EquipmentChartComponent } from './home/equipment-chart/equipment-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EquipmentCardComponent,
    EquipmentChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
