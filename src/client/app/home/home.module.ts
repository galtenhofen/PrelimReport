import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EncounterModule } from '../encounter/encounter.module';
import { EncounterService } from '../encounter/encounter.service';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule, EncounterModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [EncounterService]
})
export class HomeModule { }
